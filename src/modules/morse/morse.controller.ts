import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { MorseService } from './morse.service';

@Controller('morse')
export class MorseController {
  constructor(private readonly morseService: MorseService) {}

  @Get('text/:text')
  getMorseText(
    @Param('text') text: string,
    @Query('generateExceptionOnInvalidLetter')
    generateExceptionOnInvalidLetter: string,
  ) {
    return this.morseService.getMorseText(
      text,
      generateExceptionOnInvalidLetter?.toUpperCase() === 'TRUE',
    );
  }

  @Get('audio/:text')
  getMorseAudio(@Param('text') text: string, @Res() response: Response) {
    return this.morseService.getMorseAudio(text, response);
  }
}
