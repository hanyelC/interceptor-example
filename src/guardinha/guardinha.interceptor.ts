import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, tap } from 'rxjs';
import { UseGuardinhaConfigs } from 'src/guardinha/guardinha-configs.decorator';
import { Logger } from 'src/logger';

@Injectable()
export class GuardinhaInterceptor implements NestInterceptor {
  constructor(
    private reflector: Reflector,
    private readonly logger: Logger,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const roles = this.reflector.get(UseGuardinhaConfigs, context.getHandler());
    console.log('roles', roles);

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => this.logger.log(`After... ${Date.now() - now}ms 🤚`)));
  }
}
