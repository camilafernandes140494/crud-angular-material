import { Component, OnInit } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Cliente } from "./cliente";
import { ClienteService } from "../cliente.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-register",
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      // const id = query.get("id");
      const params = query["params"];
      const id = params.id;
      if (id) {
        let clienteEncontrado = this.service.buscarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
      }
    });
  }

  onSubmit() {
    this.service.salvar(this.cliente);
    this.cliente = Cliente.newCliente();
  }
}
