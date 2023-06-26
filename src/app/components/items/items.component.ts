import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[] = [
    {
      id: 1,
      title: 'Manzana',
      price: 5,
      quantity: 6,
      completed: false
    },
    {
      id: 2,
      title: 'Pera',
      price: 5,
      quantity: 6,
      completed: true
    }
  ]

  constructor(){}
}
