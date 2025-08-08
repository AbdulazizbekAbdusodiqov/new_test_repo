import { Module } from '@nestjs/common';
import { JphgkadasService } from './jphgkadas.service';
import { JphgkadasController } from './jphgkadas.controller';

@Module({
  controllers: [JphgkadasController],
  providers: [JphgkadasService],
})
export class JphgkadasModule {}
