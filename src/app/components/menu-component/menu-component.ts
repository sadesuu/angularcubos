import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/serviceCubos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit{
  public marcas!: Array<string>;
  public menuAbierto = false;
  public perfilMenuAbierto = false;
  public usuarioLogeado = !!sessionStorage.getItem('TOKEN');

  constructor(
    private _service: ServiceCubos,
    private _cdr : ChangeDetectorRef
  ){}

  async loadMarcas():Promise<void>{
    this.marcas = await this._service.loadMarcas()
  }


  async ngOnInit(): Promise<void> {
    await this.loadMarcas();
  }

  cerrarSesion(): void {
    sessionStorage.removeItem('TOKEN');
    this.usuarioLogeado = false;
  }

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  alternarPerfilMenu(): void {
    this.perfilMenuAbierto = !this.perfilMenuAbierto;
  }

  cerrarPerfilMenu(): void {
    this.perfilMenuAbierto = false;
  }
}
