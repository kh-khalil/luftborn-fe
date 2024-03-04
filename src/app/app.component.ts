import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemCardComponent } from './item-card/item-card.component';
import { MainCardComponent } from './main-card/main-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ItemCardComponent, MainCardComponent, CommonModule],
})
export class AppComponent {
  title = 'luftborn-fe';
}
