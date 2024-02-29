import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UseGuardinhaConfigs } from 'src/guardinha/guardinha-configs.decorator';
import { GuardinhaConfigs } from 'src/guardinha/guardinha-configs.enum';
import { GuardinhaInterceptor } from 'src/guardinha/guardinha.interceptor';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuardinhaConfigs([
    GuardinhaConfigs.ALLOW_HIGH_TABLE,
    GuardinhaConfigs.ALLOW_PLEBLE,
  ])
  @UseInterceptors(GuardinhaInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
}
