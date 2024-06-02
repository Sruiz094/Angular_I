import { Routes } from '@angular/router';
import { FormulariosComponent } from './practica1/formularios/formularios.component';
import { ControlComponent } from './practica1/control/control.component';
import { MaterialComponent } from './practica2/material/material.component';
import { CiclosVidaComponent } from './practica2/ciclos-vida/ciclos-vida.component';

export const routes: Routes = [
    {
        path: '',
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
