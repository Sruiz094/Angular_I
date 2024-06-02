import { MaterialModule } from './../../modules/material/material.module';
import { Component } from '@angular/core';
@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

}
