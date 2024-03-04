import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemCardComponent } from './item-card/item-card.component';
import { MainCardComponent } from './main-card/main-card.component';
import { ApiDataService } from './services/api/data.service';
import { Item } from './services/models/data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ItemCardComponent, MainCardComponent, CommonModule],
})
export class AppComponent {
  title = 'luftborn-fe';
  list = new Array(10);

  data$: Observable<Item[]>;

  constructor(private apiDataService: ApiDataService) {
    this.data$ = this.apiDataService.getData();
  }
}
