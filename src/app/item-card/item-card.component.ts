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
}
