import { Component, OnInit } from "@angular/core";
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
  listaClientes: Cliente[] = [];
  colunasTabela: string[] = ["id", "name", "cpf", "dataNascimento", "email"];
  constructor(private service: ClienteService) {}

  nomeBusca: string = "";

  ngOnInit(): void {
    this.listaClientes = this.service.pesquisarCliente("");
  }
  pesquisar(): void {
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca);
  }
}
