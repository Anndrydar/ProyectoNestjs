import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EquipoDocument = Equipo & Document;

@Schema()
export class Equipo {

@Prop()
nombre: String;

@Prop()
descripcion: String;

@Prop()
serie: String;



}

export const EquipoSchema = SchemaFactory.createForClass(Equipo);
