import { Module } from '@nestjs/common';
import { TestFolderService } from './test_folder.service';
import { TestFolderController } from './test_folder.controller';

@Module({
  controllers: [TestFolderController],
  providers: [TestFolderService],
})
export class TestFolderModule {}
