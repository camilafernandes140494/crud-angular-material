import { v4 as uuidv4 } from "uuid";

export class Cliente {
  id?: string;
  name?: string;
  email?: string;
  dataNascimento?: string;
  cpf?: string;
  deletando: boolean = false;

  static newCliente(): Cliente {
    const cliente = new Cliente();
    cliente.id = uuidv4();
    return cliente;
  }
}
