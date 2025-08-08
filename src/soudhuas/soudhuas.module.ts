import { Module } from '@nestjs/common';
import { SoudhuasService } from './soudhuas.service';
import { SoudhuasController } from './soudhuas.controller';

@Module({
  controllers: [SoudhuasController],
  providers: [SoudhuasService],
})
export class SoudhuasModule {}
