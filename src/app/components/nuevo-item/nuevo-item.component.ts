import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-nuevo-item',
  templateUrl: './nuevo-item.component.html',
  styleUrls: ['./nuevo-item.component.css']
})
export class NuevoItemComponent {
  id!: string
  title!: string
  price!: number
  quantity!: number

  onSubmit(){
    const item = {
      id: this.id,
      title: this.title,
      price: this.price,
      quantity: this.quantity
    }
  }
}
