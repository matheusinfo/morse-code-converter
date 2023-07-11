import { Test, TestingModule } from '@nestjs/testing';
import { MorseController } from '../../../src/modules/morse/morse.controller';
import { MorseService } from '../../../src/modules/morse/morse.service';

describe('MorseController', () => {
  let controller: MorseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorseController],
      providers: [MorseService],
    }).compile();

    controller = module.get<MorseController>(MorseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
