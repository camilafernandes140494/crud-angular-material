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

  atualizar(cliente: Cliente): void {
    const storage = this.ObterTodosClientes();
    storage.forEach((c) => {
      if (c.id === cliente.id) {
        // storage[index] = cliente;
        Object.assign(c, cliente);
      }
    });
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarCliente(nome: string): Cliente[] {
    const clientes = this.ObterTodosClientes();
    if (!nome) {
      return clientes;
    }
    return clientes.filter((cliente) => cliente.name?.indexOf(nome) !== -1);
  }

  buscarClientePorId(id: string): Cliente | undefined {
    const clientes = this.ObterTodosClientes();
    return clientes.find((c) => c.id === id);
  }

  private ObterTodosClientes(): Cliente[] {
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
