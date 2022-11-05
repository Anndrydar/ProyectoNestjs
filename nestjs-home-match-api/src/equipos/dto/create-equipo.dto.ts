import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';


export class CreateEquipoDto {
    
       @IsString()
       @MinLength(3)
       @IsNotEmpty()
       @ApiProperty({example:'Nombre de un equipo de futbol'})
       nombre: string;
       
       @IsString()
       @MinLength(8)
       @IsNotEmpty()
       @ApiProperty({example:'Como describiria a ese equipo'})
       descripcion: String;
       
       @IsString()
       @MinLength(1)
       @MaxLength(1)
       @IsNotEmpty()
       @ApiProperty({example:'En que serie juega'})
       serie: String;


}
