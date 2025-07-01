import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estado } from "./brasilapi.models";

@Injectable({
  providedIn: "root",
})
export class BrasilapiService {
  constructor(private http: HttpClient) {}
  static BASE_URL = "https://brasilapi.com.br/api";

  listarUFs(): Observable<Estado[]> {
    return this.http.get<any>(BrasilapiService.BASE_URL + "/ibge/uf/v1");
  }
}
