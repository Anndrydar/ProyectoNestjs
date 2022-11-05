import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TorneoDocument = Torneo & Document;

@Schema()
export class Torneo {

@Prop()
descripcion: String;


}
export const TorneoSchema = SchemaFactory.createForClass(Torneo);
