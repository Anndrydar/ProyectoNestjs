import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { UpdateTorneoDto } from './dto/update-torneo.dto';
import { Torneo, TorneoDocument } from './esquemas/torneo.esquema';
import { Model, isValidObjectId } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class TorneosService {
  constructor( 
    @InjectModel(Torneo.name) private readonly torneoModel: Model<TorneoDocument>, 
  ) {}

  async create(createEquipoDto: CreateTorneoDto): Promise<Torneo> { 
    return this.torneoModel.create(createEquipoDto); 
  }

  async findAll(request: Request): Promise<Torneo[]> { 
    return this.torneoModel.find(request.query)
    .setOptions({ sanitizeFilter: true }).exec();
  }

  async findOne(id: string): Promise<Torneo> { 
    if(isValidObjectId(id)){
      return this.torneoModel.findOne({ _id: id }).exec(); 
    }
    if(!isValidObjectId(id)){
      throw new InternalServerErrorException('Id incorrecto');
    }
    
  }

  async update(id: string, updateTorneoDto: UpdateTorneoDto): Promise<Torneo> { 
    return this.torneoModel.findOneAndUpdate({ _id: id }, updateTorneoDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.torneoModel.findByIdAndRemove({ _id: id }).exec(); 

  }
  
}
