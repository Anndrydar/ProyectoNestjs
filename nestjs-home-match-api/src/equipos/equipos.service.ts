import { Injectable,InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo, EquipoDocument } from './esquemas/equipo.esquema';
import { Model, isValidObjectId } from 'mongoose';
import { Request } from 'express';


@Injectable()
export class EquiposService {
  constructor( 
    @InjectModel(Equipo.name) public readonly equipoModel: Model<EquipoDocument>, 
  ) {}

  async create(createEquipoDto: CreateEquipoDto): Promise<Equipo> { 
    return this.equipoModel.create(createEquipoDto); 
  }

  async findAll(request: Request): Promise<Equipo[]> { 
    return this.equipoModel.find(request.query)
    .setOptions({ sanitizeFilter: true }).exec();
  }

  async findOne(id: string): Promise<Equipo> { 
    if(isValidObjectId(id)){
      return this.equipoModel.findOne({ _id: id }).exec(); 
    }
    if(!isValidObjectId(id)){
      throw new InternalServerErrorException('Id incorrecto');
    }
    
  }


  async update(id: string, updateEquipoDto: UpdateEquipoDto): Promise<Equipo> { 
    return this.equipoModel.findOneAndUpdate({ _id: id }, updateEquipoDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.equipoModel.findByIdAndRemove({ _id: id }).exec(); 
  }
}
