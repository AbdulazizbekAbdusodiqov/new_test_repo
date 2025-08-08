import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestFolderService } from './test_folder.service';
import { CreateTestFolderDto } from './dto/create-test_folder.dto';
import { UpdateTestFolderDto } from './dto/update-test_folder.dto';

@Controller('test-folder')
export class TestFolderController {
  constructor(private readonly testFolderService: TestFolderService) {}

  @Post()
  create(@Body() createTestFolderDto: CreateTestFolderDto) {
    return this.testFolderService.create(createTestFolderDto);
  }

  @Get()
  findAll() {
    return this.testFolderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testFolderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestFolderDto: UpdateTestFolderDto) {
    return this.testFolderService.update(+id, updateTestFolderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testFolderService.remove(+id);
  }
}
