import { Injectable } from "@angular/core";
import { Cliente } from "./register/cliente";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor() {}
  static REPO_CLIENTES = "_CLIENTES";

  salvar(cliente: Cliente): void {
    const storage = this.ObterTodosClientes();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  ObterTodosClientes(): Cliente[] {
    const repositorioClientes = localStorage.getItem(
      ClienteService.REPO_CLIENTES,
    );
    if (repositorioClientes) {
      return JSON.parse(repositorioClientes) as Cliente[];
    }
    const clientes: Cliente[] = [];
    localStorage.setItem(
      ClienteService.REPO_CLIENTES,
      JSON.stringify(clientes),
    );
    return clientes;
  }
}
