import { Injectable, Logger as NestLogger } from '@nestjs/common';

@Injectable()
export class Logger {
  private readonly logger: NestLogger = new NestLogger();

  constructor() {}

  log(message: string) {
    this.logger.log(message);
  }
}
