import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.css'
})
export class CapicuaComponent {
  @Input() numero = '';
  
  esCapicua: boolean | undefined;
  verificarCapicua() {
    if (this.numero.length >= 2) {
      const numeroReverso = this.numero.split('').reverse().join('');
      this.esCapicua = this.numero === numeroReverso;
    } else {
      this.esCapicua = false;
    }
  }

}
