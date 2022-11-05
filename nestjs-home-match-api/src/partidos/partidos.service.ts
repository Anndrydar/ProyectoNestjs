import { Injectable,InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Partido, PartidoDocument } from './esquemas/partido.esquema';
import { Model, isValidObjectId } from 'mongoose';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Request } from 'express';

@Injectable()
export class PartidosService {
  
  constructor( 
    @InjectModel(Partido.name) private readonly partidoModel: Model<PartidoDocument>, 
  ) {}

  async create(createPartidoDto: CreatePartidoDto): Promise<Partido> { 
    return this.partidoModel.create(createPartidoDto); 
  }

  async findAll(request: Request): Promise<Partido[]> { 
    return this.partidoModel.find(request.query)
    .setOptions({ sanitizeFilter: true })
    .exec();
  }

  async findOne(id: string): Promise<Partido> { 
    if(isValidObjectId(id)){
      return this.partidoModel.findOne({ _id: id }).exec(); 
    }
    if(!isValidObjectId(id)){
      throw new InternalServerErrorException('Id incorrecto');
    }
  }

  async update(id: string, updatePartidoDto: UpdatePartidoDto): Promise<Partido> { 
    return this.partidoModel.findOneAndUpdate({ _id: id }, updatePartidoDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.partidoModel.findByIdAndRemove({ _id: id }).exec(); 
  }




}
