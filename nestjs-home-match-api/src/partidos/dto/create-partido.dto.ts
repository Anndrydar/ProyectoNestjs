import { ApiProperty } from '@nestjs/swagger';
import { Torneo } from '../../torneos/esquemas/torneo.esquema';
import {Equipo} from '../../equipos/esquemas/equipo.esquema';
import {IsString, MinLength, IsNotEmpty, MaxLength, IsNumber, Min} from 'class-validator';

export class CreatePartidoDto {

@IsString()
@MinLength(24)
@MaxLength(24)
@IsNotEmpty()
@ApiProperty({example: 'Id del torneo jugado'})
idTorneo: Torneo;

@IsString()
@MinLength(24)
@MaxLength(24)
@IsNotEmpty()
@ApiProperty({example: 'Id del equipo local'})
idEquipo1: Equipo;


@IsString()
@MinLength(24)
@MaxLength(24)
@IsNotEmpty()
@ApiProperty({example: 'Id del equipo visitante'})
idEquipo2: Equipo;


@IsNumber()
@Min(0)
@IsNotEmpty()
@ApiProperty({example: 'Goles del equipo local'})
golesEquipo1: Number;

@IsNumber()
@Min(0)
@IsNotEmpty()
@ApiProperty({example: 'Goles del equipo visitante'})
golesEquipo2: Number;


@IsString()
@MinLength(8)
@IsNotEmpty()
@ApiProperty({example: 'Escriba que tal se dio el partido'})
Observacion : String;




}
