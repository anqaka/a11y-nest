import { Test, TestingModule } from '@nestjs/testing';
import { AxeService } from './axe.service';

describe('AxeService', () => {
  let service: AxeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AxeService],
    }).compile();

    service = module.get<AxeService>(AxeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
