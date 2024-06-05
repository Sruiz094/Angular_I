import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule

  ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent implements OnInit{
  @Input() nombre = '';

  ngOnInit(): void {
    console.log("Formulario a sido inicializado")
  }

  borrarNombre(){
    this.nombre='';
  }

  
}
