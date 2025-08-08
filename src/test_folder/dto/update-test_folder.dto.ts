import { PartialType } from '@nestjs/mapped-types';
import { CreateTestFolderDto } from './create-test_folder.dto';

export class UpdateTestFolderDto extends PartialType(CreateTestFolderDto) {}
