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
esCapicua: any;
numero: any;
  ngOnInit(): void {
    console.log("Formulario a sido inicializado")
  }

  borrarNombre(){
    this.nombre='';
  }

  verificarCapicua() {
    if (this.numero.length >= 2) {
      const numeroReverso = this.numero.split('').reverse().join('');
      this.esCapicua = this.numero === numeroReverso;
    } else {
      this.esCapicua = false;
    }
  }
}
