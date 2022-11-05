import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { Equipo, EquipoSchema } from './esquemas/equipo.esquema';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Equipo.name, schema: EquipoSchema }]), 
  ],
  controllers: [EquiposController],
  providers: [EquiposService]
})
export class EquiposModule {}
