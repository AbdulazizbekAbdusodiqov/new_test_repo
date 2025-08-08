import { Module } from '@nestjs/common';
import { TestFolderModule } from './test_folder/test_folder.module';
import { SoudhuasModule } from './soudhuas/soudhuas.module';

@Module({
  imports: [TestFolderModule, SoudhuasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
