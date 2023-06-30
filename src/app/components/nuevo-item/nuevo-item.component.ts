import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/shared/services/item.service';

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

  constructor(private itemService: ItemService, private router: Router){}

  onSubmit(){
    this.itemService.addItem({
      id: this.id,
      title: this.title,
      price: this.price,
      quantity: this.quantity,
      completed: false
    })

    this.router.navigate(['/'])
  }
}
