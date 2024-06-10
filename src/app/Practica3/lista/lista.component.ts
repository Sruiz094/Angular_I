import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { MaterialComponent } from './../../practica2/material/material.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  @Input() data: any

  constructor(){}
  ngOnInit(): void {
    console.log(this.data);
  }



}
