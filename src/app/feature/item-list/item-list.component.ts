import { Component, OnInit } from '@angular/core';
import { ItemInCart } from '../model/item-in-cart.model';
import { Item } from '../model/item.model';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items : Item[] =[ ];
  isItemSelectedForDetails:boolean=false;
  selectedItem:Item;

  constructor(private itemService: ItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.itemService.items;
  }

  getItemDetail(item:Item) {
    this.isItemSelectedForDetails = true;
    this.selectedItem = item;
  }

  addItemToCart(item:Item) {
    this.cartService.addToCart(new ItemInCart(item, 1, 0));
  }
}
