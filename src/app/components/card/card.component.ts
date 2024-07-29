import { Component, Input } from '@angular/core';
import { pokemon } from '../../Models/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() nombre:pokemon;

}
