import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = []
  total: number = 0

  constructor(private itemService: ItemService){}

  ngOnInit(){
    this.itemService.getItems().subscribe(items => {
      this.items = items
      this.getTotal()
    })
  }

  deleteItem(item: Item){
    this.items = this.items.filter(object => object.id !== item.id)
    this.itemService.deleteItem(item).subscribe()
    this.getTotal()
  }

  toggleCompleted(item: Item){
    item.completed = !item.completed
    this.itemService.toggleCompleted(item).subscribe()
    this.getTotal()
  }

  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.price * item.quantity)
                .reduce((precioTotal, precio) => precioTotal += precio, 0)
  }
}
