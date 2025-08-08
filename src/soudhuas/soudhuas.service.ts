import { Injectable } from '@nestjs/common';
import { CreateSoudhuaDto } from './dto/create-soudhua.dto';
import { UpdateSoudhuaDto } from './dto/update-soudhua.dto';

@Injectable()
export class SoudhuasService {
  create(createSoudhuaDto: CreateSoudhuaDto) {
    return 'This action adds a new soudhua';
  }

  findAll() {
    return `This action returns all soudhuas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soudhua`;
  }

  update(id: number, updateSoudhuaDto: UpdateSoudhuaDto) {
    return `This action updates a #${id} soudhua`;
  }

  remove(id: number) {
    return `This action removes a #${id} soudhua`;
  }
}
