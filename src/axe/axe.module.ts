import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AxeService } from './axe.service';
import { AxeController } from './axe.controller';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AxeController],
  providers: [AxeService],
})
export class AxeModule {}
