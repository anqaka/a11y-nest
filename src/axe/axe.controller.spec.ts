import { Test, TestingModule } from '@nestjs/testing';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AxeController } from './axe.controller';
import { AxeService } from './axe.service';

describe('AxeController', () => {
  let controller: AxeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [AxeController],
      providers: [AxeService],
    }).compile();

    controller = module.get<AxeController>(AxeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
