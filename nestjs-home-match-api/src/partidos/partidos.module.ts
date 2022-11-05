import { Module } from '@nestjs/common';
import { PartidosService } from './partidos.service';
import { PartidosController } from './partidos.controller';
import { Partido, PartidoSchema } from './esquemas/partido.esquema';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Partido.name, schema: PartidoSchema }]), 
  ],
  controllers: [PartidosController],
  providers: [PartidosService]
})
export class PartidosModule {}
