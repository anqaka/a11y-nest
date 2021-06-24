import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxeModule } from './axe/axe.module';

@Module({
  imports: [AxeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
