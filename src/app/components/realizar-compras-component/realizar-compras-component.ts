import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/serviceCubos';
import { ServiceCompras } from '../../services/serviceCompras';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-compras-component',
  standalone: false,
  styleUrl: './realizar-compras-component.css',
  templateUrl: './realizar-compras-component.html',
})
export class RealizarComprasComponent implements OnInit {
  public cubos: Cubo[] = [];
  public cuboSeleccionado?: Cubo;
  public cargando = true;
  public error = false;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _serviceCompras: ServiceCompras,
    private _cdr:ChangeDetectorRef,
    private _router:Router
  ) {}

  async ngOnInit(): Promise<void> {
      this.cubos = await this._serviceCubos.loadCubos();
      this._cdr.detectChanges()
   
  }

  async realizarCompra(): Promise<void> {
    if (this.cuboSeleccionado) {
      await this._serviceCompras.realizarCompras(this.cuboSeleccionado);
      this._cdr.detectChanges()
      this._router.navigate(['/compras'])
    }
  }
}
