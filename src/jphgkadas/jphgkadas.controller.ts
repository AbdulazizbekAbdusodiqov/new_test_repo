import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JphgkadasService } from './jphgkadas.service';
import { CreateJphgkadaDto } from './dto/create-jphgkada.dto';
import { UpdateJphgkadaDto } from './dto/update-jphgkada.dto';

@Controller('jphgkadas')
export class JphgkadasController {
  constructor(private readonly jphgkadasService: JphgkadasService) {}

  @Post()
  create(@Body() createJphgkadaDto: CreateJphgkadaDto) {
    return this.jphgkadasService.create(createJphgkadaDto);
  }

  @Get()
  findAll() {
    return this.jphgkadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jphgkadasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJphgkadaDto: UpdateJphgkadaDto) {
    return this.jphgkadasService.update(+id, updateJphgkadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jphgkadasService.remove(+id);
  }
}
