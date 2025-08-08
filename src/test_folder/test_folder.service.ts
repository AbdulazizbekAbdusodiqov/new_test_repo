import { Injectable } from '@nestjs/common';
import { CreateTestFolderDto } from './dto/create-test_folder.dto';
import { UpdateTestFolderDto } from './dto/update-test_folder.dto';

@Injectable()
export class TestFolderService {
  create(createTestFolderDto: CreateTestFolderDto) {
    return 'This action adds a new testFolder';
  }

  findAll() {
    return `This action returns all testFolder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testFolder`;
  }

  update(id: number, updateTestFolderDto: UpdateTestFolderDto) {
    return `This action updates a #${id} testFolder`;
  }

  remove(id: number) {
    return `This action removes a #${id} testFolder`;
  }
}
