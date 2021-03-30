import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items : Item[] =[ ];

  constructor() { 
    console.log("ItemService Called");
    if(this.items.length == 0) {
      this.items.push(new Item(1, "Item 1", "Item 1 Description"));
      this.items.push(new Item(10, "Item 10", "Item 10 Description"));
    }    
  }
}
