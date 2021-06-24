import testWithAxe from 'axe-node';
import { Injectable } from '@nestjs/common';
import { CreateAxeDto } from './dto/create-axe.dto';

@Injectable()
export class AxeService {
  axeConfig: CreateAxeDto = { pages: [] };
  axeResults: Promise<any[]> | any[] = [];
  create(createAxeDto: CreateAxeDto) {
    this.axeConfig = createAxeDto;
    this.testWithAxe(this.axeConfig);
    return this.axeConfig;
  }

  testWithAxe(config) {
    console.log(config);
    const foo: Promise<any[]> | any[] = testWithAxe(config);
    this.axeResults = foo;
  }

  findAxeResult() {
    return this.axeResults;
  }
}
