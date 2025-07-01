import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estado, Municipio } from "./brasilapi.models";

@Injectable({
  providedIn: "root",
})
export class BrasilapiService {
  constructor(private http: HttpClient) {}
  static BASE_URL = "https://brasilapi.com.br/api";

  listarUFs(): Observable<Estado[]> {
    return this.http.get<any>(BrasilapiService.BASE_URL + "/ibge/uf/v1");
  }

  listarMunicipios(uf: string): Observable<Municipio[]> {
    return this.http.get<any>(
      BrasilapiService.BASE_URL + `/ibge/municipios/v1/${uf}`,
    );
  }
}
