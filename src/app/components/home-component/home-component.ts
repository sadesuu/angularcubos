import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ServiceCubos } from '../../services/serviceCubos';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  public cuboFavorito!: Cubo;
  public arrayCubos!: Array<Cubo>;
  public favoritos = new Set<string>();

  constructor(
    private _service: ServiceCubos,
    private _cdr: ChangeDetectorRef,
  ) {}

  async loadCubos(): Promise<void> {
    this.arrayCubos = await this._service.loadCubos();
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadCubos();
  }

  seleccionarFavorito(cubo: Cubo): void {
    this.cuboFavorito = cubo;
  }
  public alternarFavorito(cubo: Cubo): void {
    const clave = this.obtenerClaveCubo(cubo);

    if (this.favoritos.has(clave)) {
      this.favoritos.delete(clave);
    } else {
      this.favoritos.add(clave);
    }
  }

  public esFavorito(cubo: Cubo): boolean {
    return this.favoritos.has(this.obtenerClaveCubo(cubo));
  }

  private obtenerClaveCubo(cubo: Cubo): string {
    return `${cubo.marca}-${cubo.nombre}-${cubo.modelo}`;
  }
}
