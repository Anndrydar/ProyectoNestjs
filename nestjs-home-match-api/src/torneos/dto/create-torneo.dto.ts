import {ApiProperty} from '@nestjs/swagger';
import {IsString, MinLength,IsNotEmpty } from 'class-validator';

export class CreateTorneoDto {

    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    @ApiProperty({example: 'Descripcion del torneo'})
    descripcion: String;

}
