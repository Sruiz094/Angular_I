import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../modules/material/material.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MaterialComponent } from './../../practica2/material/material.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  providers: [RickAndMortyService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  personaje: any;

  constructor(private rymService:RickAndMortyService){}
  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe(
      resultado => {
        this.personaje = resultado;
        console.log(this.personaje)
      }
    )
  }


}
