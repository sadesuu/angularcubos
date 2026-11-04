import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/serviceCubos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit{
  public marcas: string[] = [];
  public menuAbierto = false;

  constructor(
    private _service: ServiceCubos,
  ){}

  async loadCubos():Promise<void>{
    const cubos = await this._service.loadCubos();
    this.marcas = [...new Set(cubos.map((cubo: Cubo) => cubo.marca))];
  }

  async ngOnInit(): Promise<void> {
    await this.loadCubos()
  }

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }
}
