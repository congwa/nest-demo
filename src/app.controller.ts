import {
  All,
  Controller,
  Header,
  Get,
  Post,
  Req,
  HttpCode,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('list/s/:id')
  @HttpCode(221)
  @Header('Cache-Control', 'none')
  getHello(@Param() params): string {
    console.log(params);
    return this.appService.getHello();
  }
}
