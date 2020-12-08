import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { get } from 'http';
import { RegistrarseService } from './registrarse.service';
import { RegistroDTO } from './Registro.dto';
import { Registro } from './Registro.entity';

@Controller('registrarse')
export class RegistrarseController {

    constructor(private registrarseService: RegistrarseService){};

    @Post()
    create(@Body() registro: RegistroDTO): Promise <Registro>{
        return this.registrarseService.create(registro);
    }

    @Get(':usuario')
    public getDatosUsuarioRegistrado(@Param('dni') dni:number) {
        return this.registrarseService.getDatosUsuarioRegistrado(dni);
    }
}


