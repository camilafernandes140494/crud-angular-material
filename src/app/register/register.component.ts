import { Component } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Cliente } from "./cliente";
import { ClienteService } from "../cliente.service";

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
export class RegisterComponent {
  cliente: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService) {}

  onSubmit() {
    // console.log("Form submitted:", this.cliente);
    this.service.salvar(this.cliente);
  }
}
