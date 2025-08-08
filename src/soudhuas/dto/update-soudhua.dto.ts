import { PartialType } from '@nestjs/mapped-types';
import { CreateSoudhuaDto } from './create-soudhua.dto';

export class UpdateSoudhuaDto extends PartialType(CreateSoudhuaDto) {}
