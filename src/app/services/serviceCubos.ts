import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cubo } from "../models/Cubo";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { SKIP_TOKEN } from "../utils/token.context";
@Injectable({
    providedIn: "root",
})
export class ServiceCubos{

    private cubosRequest?: Promise<Cubo[]>;
    private url = environment.urlCubos;

    constructor(
        private _http:HttpClient
    ){}

    async loadCubos():Promise<Cubo[]>{

        let req = 'api/Cubos'
        if (!this.cubosRequest) {
            this.cubosRequest = firstValueFrom(
                this._http.get<Cubo[]>(this.url + req, {
                    context: new HttpContext().set(SKIP_TOKEN, true),
                }),
            );
        }

        return this.cubosRequest;
    }

    async loadCubosByMarca(marca: string): Promise<Cubo[]> {
        const req = 'api/Cubos/CubosMarca/' + encodeURIComponent(marca);
        return firstValueFrom(this._http.get<Cubo[]>(this.url + req));
        
    }

    async loadMarcas():Promise<string[]>{
        const req = 'api/Cubos/Marcas'
        return firstValueFrom(this._http.get<string[]>(this.url + req))
    }
}