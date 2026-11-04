import { ChangeDetectorRef, Component } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/serviceCubos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubo-por-marca-component',
  standalone: false,
  styleUrl: './cubo-por-marca-component.css',
  templateUrl: './cubo-por-marca-component.html',
})
export class CuboPorMarcaComponent {
  public arrayCubos: Cubo[] = [];
  public marca!:string;

  constructor(
    private _service: ServiceCubos,
    private _Activateroute: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) {}

  async loadCubosByMarca(marca:string): Promise<void> {
    this.arrayCubos = await this._service.loadCubosByMarca(marca)
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    this._Activateroute.paramMap.subscribe(async (parametros) => {
      this.marca = parametros.get('marca') ?? '';
      await this.loadCubosByMarca(this.marca);
    });
  }
}
