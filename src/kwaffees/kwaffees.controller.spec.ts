import { Test, TestingModule } from '@nestjs/testing';
import { KwaffeesController } from './kwaffees.controller';

describe('KwaffeesController', () => {
  let controller: KwaffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KwaffeesController],
    }).compile();

    controller = module.get<KwaffeesController>(KwaffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
