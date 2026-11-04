import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-favorito-component',
  standalone: false,
  styleUrl: './favorito-component.css',
  templateUrl: './favorito-component.html',
})
export class FavoritoComponent {
  @Input() cubo!:Cubo
  @Input() esFavorito = false

  @Output() favoritoChange= new EventEmitter<Cubo>()

  alternarFavorito():void{
    this.favoritoChange.emit(this.cubo)
  }
}
