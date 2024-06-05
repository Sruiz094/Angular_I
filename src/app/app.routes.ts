import { Routes } from '@angular/router';
import { FormulariosComponent } from './practica1/formularios/formularios.component';
import { ControlComponent } from './practica1/control/control.component';
import { MaterialComponent } from './practica2/material/material.component';
import { CiclosVidaComponent } from './practica2/ciclos-vida/ciclos-vida.component';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { ListaComponent } from './Practica3/lista/lista.component';
import { CapicuaComponent } from './Taller1/capicua/capicua.component';

export const routes: Routes = [

    {
        path: "taller1",
        component: CapicuaComponent,
    },
    {   path: "",
        component: ListaComponent,
    },
    {
        path: 'ciclo',
        component: CiclosVidaComponent,
    },
    {
        path: 'material',
        component: MaterialComponent,
    },
    {
        path: 'control',
        component: ControlComponent,
    },
    {
        path: 'forms',
        component: FormulariosComponent,
    },

];
