import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MorseController } from '../morse/morse.controller';
import { MorseService } from '../morse/morse.service';

@Module({
  imports: [],
  controllers: [AppController, MorseController],
  providers: [MorseService],
})
export class AppModule {}
