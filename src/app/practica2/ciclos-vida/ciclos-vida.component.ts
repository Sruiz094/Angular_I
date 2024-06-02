import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos-vida',
  standalone: true,
  imports: [],
  templateUrl: './ciclos-vida.component.html',
  styleUrl: './ciclos-vida.component.css'
})
export class CiclosVidaComponent implements OnInit, DoCheck{
  ngDoCheck(): void {
    throw new Error('Paso por DoCheck');
  }
  ngOnInit(): void {
    console.log("Entre al ngOnInit")
  }

}
