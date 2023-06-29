import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = []
  total: number = 0

  constructor(){}

  ngOnInit(){
    this.items = [
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

    this.getTotal()
  }

  deleteItem(item: Item){
    this.items = this.items.filter(object => object.id !== item.id)
    this.getTotal()
  }

  toggleCompleted(item: Item){
    item.completed = !item.completed
    this.getTotal()
  }

  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.price * item.quantity)
                .reduce((precioTotal, precio) => precioTotal += precio, 0)
  }
}
