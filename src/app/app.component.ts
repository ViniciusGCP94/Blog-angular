import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog-Angular';
}
