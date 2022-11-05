import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Torneo } from '../../torneos/esquemas/torneo.esquema';
import { Equipo } from '../../equipos/esquemas/equipo.esquema';
import mongoose from 'mongoose';


export type PartidoDocument = Partido & Document;


@Schema()
export class Partido{

  @Prop ({ type: mongoose.Schema.Types.String, ref: 'Torneo' }) 
  idTorneo: Torneo;
  
  @Prop ({ type: mongoose.Schema.Types.String, ref: 'Equipo' }) 
  idEquipo1: Equipo;

  @Prop ({ type: mongoose.Schema.Types.String, ref: 'Equipo' }) 
  idEquipo2: Equipo;
  
  @Prop()
  golesEquipo1: Number;
  
  @Prop()
  golesEquipo2: Number; 

  @Prop()
  Observacion : String;

}



export const PartidoSchema = SchemaFactory.createForClass(Partido);