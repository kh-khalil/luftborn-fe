import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss',
})
export class MainCardComponent {
  title = 'Report for';
  subTitle = 'Best Sales';
  periods = ['Daily', 'Weekly', 'Monthly'];
}
