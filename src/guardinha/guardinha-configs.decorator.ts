import { Reflector } from '@nestjs/core';
import { GuardinhaConfigs } from 'src/guardinha/guardinha-configs.enum';

export const UseGuardinhaConfigs =
  Reflector.createDecorator<GuardinhaConfigs[]>();
