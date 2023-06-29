import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item  
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter()
  @Output() toggleCompleted: EventEmitter<Item> = new EventEmitter()

  onDelete(item: Item){
    this.deleteItem.emit(item)
  }

  onToggle(item: Item){
    this.toggleCompleted.emit(item)
  }
}
