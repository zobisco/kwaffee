import { Controller, Get } from '@nestjs/common';

@Controller('kwaffees')
export class KwaffeesController {
  @Get('flavours')
  findAll() {
    return 'This action returns all the kwaffees ☕';
  }
}
