import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    CommonModule
],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent implements DoCheck{
  contador = 0;
  ngDoCheck(): void {
    this.contador ++;
    console.log("Veces que se ejecuta el Do Check",this.contador)
  }
  seMuestra1 = true;
  seMuestra2 = true;
  frutas =['pera', 'manzana', 'sandias', 'banano']
  prenderYApagar(){
    this.seMuestra1 = this.seMuestra1 ? false : true;
  }

  prenderYApagaV2(){
    this.seMuestra2 = !this.seMuestra2;  //Si esta em true se pone en false y al contrario
  }

}
