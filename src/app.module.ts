import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KwaffeesController } from './kwaffees/kwaffees.controller';

@Module({
  imports: [],
  controllers: [AppController, KwaffeesController],
  providers: [AppService],
})
export class AppModule {}
