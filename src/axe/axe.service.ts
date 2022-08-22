import { testWithAxe } from 'axe-node';
import { Injectable } from '@nestjs/common';
import { CreateAxeDto } from './dto/create-axe.dto';
import { AuditObj } from './../types/audit-obj.type';

@Injectable()
export class AxeService {
  axeConfig: CreateAxeDto = { pages: [] };
  axeResults: Promise<AuditObj>;

  create(createAxeDto: CreateAxeDto) {
    this.axeConfig = createAxeDto;

    return this.test(this.axeConfig);
  }

  async test(config) {
    const results: Promise<AuditObj> = await testWithAxe(config);

    this.axeResults = results;

    return results;
  }

  findAxeResult() {
    return this.axeResults;
  }
}
