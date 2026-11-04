import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Compras } from '../models/Compras';
import { Cubo } from '../models/Cubo';

@Injectable({
  providedIn: 'root',
})
export class ServiceCompras {
  private url = environment.urlCubos;

  constructor(private _http: HttpClient) {}

  async getCompras(): Promise<Compras[]> {
    const request = 'api/Compra/ComprasUsuario';
    return firstValueFrom(
      this._http.get<Compras[]>(this.url + request),
    );
  }

  async realizarCompras(cubo: Cubo): Promise<any> {
    const request = 'api/Compra/InsertarPedido/' + cubo.idCubo;
    return firstValueFrom(this._http.post(this.url + request, null));
  }
}
