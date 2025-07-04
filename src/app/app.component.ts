import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatIconModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "crud-angular-material";
}
