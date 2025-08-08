import { Module } from '@nestjs/common';
import { TestFolderModule } from './test_folder/test_folder.module';
import { JphgkadasModule } from './jphgkadas/jphgkadas.module';

@Module({
  imports: [TestFolderModule, JphgkadasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
