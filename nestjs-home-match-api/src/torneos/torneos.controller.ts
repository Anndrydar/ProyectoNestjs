import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TorneosService } from './torneos.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { UpdateTorneoDto } from './dto/update-torneo.dto';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('torneos')
@ApiTags('torneo')

export class TorneosController {
  constructor(private readonly torneosService: TorneosService) {}

  @Post()
  @ApiResponse({status:201, description:'Torneo creado'})
  @ApiResponse({status:500, description:'Falla del servidor'})
  create(@Body() createTorneoDto: CreateTorneoDto) {
    return this.torneosService.create(createTorneoDto);
  }

  @Get()
  @ApiResponse({status:200, description:'Busqueda completa de todos los torneos'})
  findAll(@Req() request: Request) {
    return this.torneosService.findAll(request);
  }

  @Get(':id')
  @ApiResponse({status:200, description:'Busquedad de un solo torneo realizada'})
  @ApiResponse({status:404, description:'Busquedad del torneo no encontrada'})
  @ApiResponse({status:500, description:'Falla del servidor'})
  findOne(@Param('id') id: string) {
    return this.torneosService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status:201, description:'Propiedades de torneo modificadas'})
  @ApiResponse({status:404, description:'Torneo no encontrado'})
  update(@Param('id') id: string, @Body() updateTorneoDto: UpdateTorneoDto) {
    return this.torneosService.update(id, updateTorneoDto);
  }

  @Delete(':id')
  @ApiResponse({status:201, description:'Torneo eliminado'})
  @ApiResponse({status:404, description:'Torneo no encontrado'})
  remove(@Param('id') id: string) {
    return this.torneosService.remove(id);
  }
}
