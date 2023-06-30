import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-nuevo-item',
  templateUrl: './nuevo-item.component.html',
  styleUrls: ['./nuevo-item.component.css']
})
export class NuevoItemComponent {
  title!: string
  price!: number
  quantity!: number

  constructor(private itemService: ItemService, private router: Router){}

  onSubmit(){
    this.itemService.addItem({
      title: this.title,
      price: this.price,
      quantity: this.quantity,
      completed: false
    }).subscribe(() => this.router.navigate(['/']))
  }
}
