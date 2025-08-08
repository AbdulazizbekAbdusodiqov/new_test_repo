import { Module } from '@nestjs/common';
import { TestFolderModule } from './test_folder/test_folder.module';

@Module({
  imports: [TestFolderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
