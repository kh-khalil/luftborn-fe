import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  bgColor: string;
}

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
