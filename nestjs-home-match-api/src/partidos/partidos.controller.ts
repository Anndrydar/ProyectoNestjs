import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartidosService } from './partidos.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('partidos')
@ApiTags('partido')

export class PartidosController {
  constructor(private readonly partidosService: PartidosService) {}

  @Post()
  @ApiResponse({status:201, description:'Partido de futbol creado'})
  @ApiResponse({status:500, description:'Falla del servidor'})
  create(@Body() createPartidoDto: CreatePartidoDto) {
    return this.partidosService.create(createPartidoDto);
  }

  @Get()
  @ApiResponse({status:200, description:'Busqueda completa de los partidos'})
  findAll(@Req() request: Request) {
    return this.partidosService.findAll(request);
  }

  @Get(':id')
  @ApiResponse({status:200, description:'Busquedad de un solo partido realizada'})
  @ApiResponse({status:404, description:'Busquedad del partido no encontrada'})
  @ApiResponse({status:500, description:'Falla del servidor'})
  findOne(@Param('id') id: string) {
    return this.partidosService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status:201, description:'Propiedades del partido modificadas'})
  @ApiResponse({status:404, description:'Partido no encontrado'})
  update(@Param('id') id: string, @Body() updatePartidoDto: UpdatePartidoDto) {
    return this.partidosService.update(id, updatePartidoDto);
  }

  @Delete(':id')
  @ApiResponse({status:201, description:'Partido eliminado'})
  @ApiResponse({status:404, description:'Partido no encontrado'})
  remove(@Param('id') id: string) {
    return this.partidosService.remove(id);
  }
}
