import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Item } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Item[]> {
    return this.httpClient
      .get<Item[]>('https://fakestoreapi.com/products?limit=10.')
      .pipe(
        map((response) => {
          return this.processData(response);
        })
      );
  }

  processData(response: Item[]): Item[] {
    const items: Array<Item> = [];

    response?.forEach((item, index) => {
      let bgColor;
      switch (index + 1) {
        case 1:
        case 4:
          bgColor = '#ff8b64';
          break;
        case 2:
        case 5:
          bgColor = '#55C2E6';
          break;
        case 6:
        case 9:
          bgColor = '#4BCF82';
          break;
        case 7:
        case 10:
          bgColor = '#7335D2';
          break;
        case 3:
          bgColor = '#FF5E7D';
          break;

        default:
          bgColor = '#F1C75B';
          break;
      }
      return items.push({
        ...item,
        bgColor,
      });
    });
    return items;
  }
}
