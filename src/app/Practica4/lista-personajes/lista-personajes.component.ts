import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from '../../Practica3/lista/lista.component';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [HttpClientModule, ListaComponent],
  providers: [RickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent {
  personajes: any;
  constructor(private rymService:RickAndMortyService){}
  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe(
      resultado => {
        this.personajes = resultado;
        console.log(resultado)
      }
    )
  }


}
