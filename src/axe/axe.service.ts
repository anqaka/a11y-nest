import testWithAxe from 'axe-node';
import { Injectable } from '@nestjs/common';
import { CreateAxeDto } from './dto/create-axe.dto';
import { AuditObj } from './../types/audit-obj.type';

@Injectable()
export class AxeService {
  axeConfig: CreateAxeDto = { pages: [] };
  axeResults: Promise<any> | AuditObj;
  create(createAxeDto: CreateAxeDto) {
    this.axeConfig = createAxeDto;
    this.testWithAxe(this.axeConfig);
    return this.axeConfig;
  }

  testWithAxe(config) {
    const results: Promise<any> | AuditObj = testWithAxe(config);
    this.axeResults = results;
  }

  findAxeResult() {
    return this.axeResults;
  }
}
