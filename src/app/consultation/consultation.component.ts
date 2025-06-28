import { Component, OnInit, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ClienteService } from "../cliente.service";
import { Cliente } from "../register/cliente";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-consultation",
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: "./consultation.component.html",
  styleUrl: "./consultation.component.scss",
})
export class ConsultationComponent implements OnInit {
  snackbar = inject(MatSnackBar);
  listaClientes: Cliente[] = [];
  colunasTabela: string[] = [
    "id",
    "name",
    "cpf",
    "dataNascimento",
    "email",
    "acoes",
  ];

  constructor(
    private service: ClienteService,
    private router: Router,
  ) {}

  nomeBusca: string = "";

  ngOnInit(): void {
    this.listaClientes = this.service.pesquisarCliente("");
  }
  pesquisar(): void {
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca);
  }

  preparaEditar(id: string): void {
    this.router.navigate(["/register"], { queryParams: { id: id } });
  }

  preparaDeletar(cliente: Cliente): void {
    cliente.deletando = true;
  }
  deletar(cliente: Cliente): void {
    this.service.deletar(cliente);
    this.snackbar.open("Cliente atualizado com sucesso!", "Ok");
    this.listaClientes = this.service.pesquisarCliente("");
  }
}
