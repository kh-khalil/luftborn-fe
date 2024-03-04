import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../services/models/data.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  @Input() item!: Item;

  // getBackgroundColor(): string {
  //   if (this.item.id === 1 || 4) return '#ff8b64';
  //   if (this.item.id === 2 || 5) return '#55C2E6';
  //   if (this.item.id === 6 || 9) return '#4BCF82';
  //   if (this.item.id === 7 || 10) return '#7335D2';
  //   if (this.item.id === 3) return '#FF5E7D';
  //   return 'F1C75B';
  // }
}
