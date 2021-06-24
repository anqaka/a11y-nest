import { Module } from '@nestjs/common';
import { AxeService } from './axe.service';
import { AxeController } from './axe.controller';

@Module({
  controllers: [AxeController],
  providers: [AxeService],
})
export class AxeModule {}
