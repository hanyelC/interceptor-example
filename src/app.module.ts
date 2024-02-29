import { Module } from '@nestjs/common';
import { Logger } from 'src/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
