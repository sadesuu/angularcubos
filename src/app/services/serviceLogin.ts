import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/Login';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SKIP_TOKEN } from '../utils/token.context';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root',
})
export class ServiceLogin {
  url = environment.urlCubos;
  constructor(private _http: HttpClient) {}
  async logInUserAsync(user: Login): Promise<any> {
    let request = 'api/Manage/Login';
    let json = JSON.stringify(user);
    let header = new HttpHeaders().set('content-type', 'application/json');
    return firstValueFrom(
      this._http.post(this.url + request, json, {
        headers: header,
        context: new HttpContext().set(SKIP_TOKEN, true),
      }),
    );
  }

  async registerUserAsyn(user: Register): Promise<any> {
    let request = 'api/Manage/RegistroUsuario';
    let json = JSON.stringify(user);
    let header = new HttpHeaders().set('content-type', 'application/json');
    return firstValueFrom(
      this._http.post(this.url + request, json, {
        headers: header,
        context: new HttpContext().set(SKIP_TOKEN, true),
      }),
    );
  }
}
