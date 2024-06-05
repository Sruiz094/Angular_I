import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private URLBase = 'https://rickandmortyapi.com/api'  //No colocar "/" despues de la palabra api porque los endpoint llevan el "/" al inicio

  constructor(private http: HttpClient) { }

  obtenerPersonajes(){
    return this.http.get(this.URLBase + '/character') //El endpoint lleva el "/" al inicio
  }
}
