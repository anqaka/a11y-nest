import { Test, TestingModule } from '@nestjs/testing';
import { AxeController } from './axe.controller';
import { AxeService } from './axe.service';

describe('AxeController', () => {
  let controller: AxeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AxeController],
      providers: [AxeService],
    }).compile();

    controller = module.get<AxeController>(AxeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
