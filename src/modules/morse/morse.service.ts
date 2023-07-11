import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import morseDatabase from './database/morse-database.json';
import { InvalidFieldError } from 'src/errors/invalid-field-error';
import { createReadStream } from 'fs';

@Injectable()
export class MorseService {
  getMorseText(text: string, generateExceptionOnInvalidLetter: boolean) {
    const formattedText = text.toUpperCase();
    const morseText = formattedText.split('').map((letter: string) => {
      const currentMorseLetter = morseDatabase[letter];
      if (currentMorseLetter === ' ') {
        return ' ';
      }

      if (!currentMorseLetter) {
        if (generateExceptionOnInvalidLetter) {
          throw new InvalidFieldError(letter);
        }

        return '//';
      }

      return currentMorseLetter;
    });
    const formattedResponse = morseText.join('');

    return {
      morseResult: formattedResponse,
    };
  }

  getMorseAudio(text: string, response: Response) {
    const formattedText = text.toUpperCase();
    const { morseResult } = this.getMorseText(formattedText, true);
    const morseAudioPaths = morseResult.split('').map((letter: string) => {
      let currentMorseCode = 'space.mp3';

      if (letter === '.') {
        currentMorseCode = 'dot.mp3';
      }

      if (letter === '-') {
        currentMorseCode = 'dash.mp3';
      }

      return join(
        process.cwd(),
        'src',
        'modules',
        'morse',
        'songs',
        currentMorseCode,
      );
    });

    for (const morseAudioPath of morseAudioPaths) {
      const readStream = createReadStream(morseAudioPath);
      response.setMaxListeners(response.getMaxListeners() + 1);
      readStream.pipe(response);
    }

    return response;
  }
}
