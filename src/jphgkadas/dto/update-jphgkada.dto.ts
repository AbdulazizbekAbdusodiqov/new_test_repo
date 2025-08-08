import { PartialType } from '@nestjs/mapped-types';
import { CreateJphgkadaDto } from './create-jphgkada.dto';

export class UpdateJphgkadaDto extends PartialType(CreateJphgkadaDto) {}
