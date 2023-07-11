import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../../src/modules/app/app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('healthcheck', () => {
    it('should return correct text on healthcheck route', () => {
      expect(appController.healthcheck()).toBe('The server is running :D');
    });
  });
});
