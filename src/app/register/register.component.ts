import { Component, OnInit, inject } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Cliente } from "./cliente";
import { ClienteService } from "../cliente.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snackbar = inject(MatSnackBar);

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
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
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem("Cliente cadastrado com sucesso!");
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(["/consultation"]);
      this.mostrarMensagem("Cliente atualizado com sucesso!");
    }
  }

  mostrarMensagem(message: string) {
    this.snackbar.open(message, "OK", {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }
}
