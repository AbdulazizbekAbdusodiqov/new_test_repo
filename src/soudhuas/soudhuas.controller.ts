import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoudhuasService } from './soudhuas.service';
import { CreateSoudhuaDto } from './dto/create-soudhua.dto';
import { UpdateSoudhuaDto } from './dto/update-soudhua.dto';

@Controller('soudhuas')
export class SoudhuasController {
  constructor(private readonly soudhuasService: SoudhuasService) {}

  @Post()
  create(@Body() createSoudhuaDto: CreateSoudhuaDto) {
    return this.soudhuasService.create(createSoudhuaDto);
  }

  @Get()
  findAll() {
    return this.soudhuasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soudhuasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoudhuaDto: UpdateSoudhuaDto) {
    return this.soudhuasService.update(+id, updateSoudhuaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soudhuasService.remove(+id);
  }
}
