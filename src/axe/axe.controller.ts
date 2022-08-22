import { Controller, Get, Post, Body, Sse, Query } from '@nestjs/common';
import { AxeService } from './axe.service';
import { CreateAxeDto } from './dto/create-axe.dto';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventEmitter2 } from '@nestjs/event-emitter';

// @todo: move `axe.test.created` to const

@Controller('axe')
export class AxeController {
  constructor(
    private readonly axeService: AxeService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Post()
  async create(@Body() createAxeDto: CreateAxeDto) {
    await this.axeService.create(createAxeDto);

    this.eventEmitter.emit('axe.test.created', createAxeDto?._id);
  }

  @Get()
  findAxeResult() {
    return this.axeService.findAxeResult();
  }

  @Sse('status')
  sse(@Query('_id') reqId: string): Observable<MessageEvent> {
    const subject = new Subject();

    this.eventEmitter.on('axe.test.created', (_id: string) => {
      if (!reqId || reqId !== _id) {
        return;
      }

      subject.next(reqId);
    });

    return subject.pipe(
      map((data: MessageEvent): MessageEvent => ({ data } as MessageEvent)),
    );
  }
}
