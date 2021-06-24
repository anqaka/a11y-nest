import { Controller, Get, Post, Body } from '@nestjs/common';
import { AxeService } from './axe.service';
import { CreateAxeDto } from './dto/create-axe.dto';

@Controller('axe')
export class AxeController {
  constructor(private readonly axeService: AxeService) {}

  @Post()
  create(@Body() createAxeDto: CreateAxeDto) {
    return this.axeService.create(createAxeDto);
  }

  @Get()
  findAxeResult() {
    return this.axeService.findAxeResult();
  }
}
