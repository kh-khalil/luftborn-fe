import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(
      'https://fakestoreapi.com/products?limit=10.'
    );
  }
}
