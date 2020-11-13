import { Injectable } from '@nestjs/common';
import { Especialidad } from './Especialidad';
import { Horario } from './Horario';
import { Medico } from './Medico';
import * as fs from 'fs';

@Injectable()
export class TurnoService {
    private listaMedicos: Medico[];
    private listaHorarios: Horario[];
    private listaEspecialidades: Especialidad[];

    public getListaHorarios(): Horario[]{
        let listaDeHorarios : Horario[] = this.loadHorario();
        return listaDeHorarios;
    }

    public getListaMedicos(): Medico[]{
        let listaDeMedicos : Medico[] = this.loadMedico();
        return listaDeMedicos;
    }

    public getListaEspecialidades(): Especialidad[]{
        let listaDeEspecialidades : Especialidad[] = this.loadEspecialidad();
        return listaDeEspecialidades;
    }



    private loadMedico():Medico[] {
        let archivo = fs.readFileSync('medicos.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        this.listaMedicos = [];
        for (let i = 0; i < elementos.length; i++) {
            let medico = new Medico(elementos[i][0], elementos[i][1]);
            this.listaMedicos.push(medico);
        }
        return this.listaMedicos;
    }

    private loadHorario():Horario[]{
        let archivo = fs.readFileSync('horarios.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
       this.listaHorarios = [];
        for (let i = 0; i < elementos.length; i++) {
            let horario = new Horario(elementos[i][0]);
            this.listaHorarios.push(horario);
        }
        return this.listaHorarios;
    }

    private loadEspecialidad(): Especialidad[] {
        let archivo = fs.readFileSync('src/turno/especialidad.csv', 'utf8');
        const elementos = archivo.split('\n');
        let listaEspecialidades = [];
        for (let i = 0; i < elementos.length; i++) {
            let especialidad = new Especialidad(elementos[i]);
            listaEspecialidades.push(especialidad);
        }
        return listaEspecialidades;
    }
}  
