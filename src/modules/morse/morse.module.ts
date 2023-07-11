import { Module } from '@nestjs/common';
import { MorseService } from './morse.service';
import { MorseController } from './morse.controller';

@Module({
  controllers: [MorseController],
  providers: [MorseService],
})
export class MorseModule {}
