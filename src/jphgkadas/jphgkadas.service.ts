import { Injectable } from '@nestjs/common';
import { CreateJphgkadaDto } from './dto/create-jphgkada.dto';
import { UpdateJphgkadaDto } from './dto/update-jphgkada.dto';

@Injectable()
export class JphgkadasService {
  create(createJphgkadaDto: CreateJphgkadaDto) {
    return 'This action adds a new jphgkada';
  }

  findAll() {
    return `This action returns all jphgkadas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jphgkada`;
  }

  update(id: number, updateJphgkadaDto: UpdateJphgkadaDto) {
    return `This action updates a #${id} jphgkada`;
  }

  remove(id: number) {
    return `This action removes a #${id} jphgkada`;
  }
}
