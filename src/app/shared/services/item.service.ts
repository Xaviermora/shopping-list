import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = 'http://localhost:3000/items'
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }

  addItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions)
  }

  toggleCompleted(item: Item): Observable<Item>{
    return this.http.put<Item>(this.url+item.id, item, this.httpOptions)
  }

  deleteItem(item: Item): Observable<Item>{
    return this.http.delete<Item>(this.url+item.id)
  }
}
