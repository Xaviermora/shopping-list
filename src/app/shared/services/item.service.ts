import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
    {
      id: '1',
      title: 'Manzana',
      price: 5,
      quantity: 6,
      completed: false
    },
    {
      id: '2',
      title: 'Pera',
      price: 5,
      quantity: 6,
      completed: true
    }
  ]

  constructor() { }

  getItems(): Item[] {
    return this.items
  }

  addItem(item: Item){
    this.items.unshift(item)
  }
}
