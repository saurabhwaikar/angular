import { Injectable } from '@angular/core';
import { ItemInCart } from '../model/item-in-cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private customerShoppingCart: ItemInCart[];
  private isExistingItem: Boolean = false;

  constructor() { }

  

  addToCart(itemInCart: ItemInCart) {
    this.isExistingItem = false;

    this.customerShoppingCart = JSON.parse(localStorage.getItem("custShopCart"));
    if (this.customerShoppingCart == null) {
      this.customerShoppingCart = [];
      this.customerShoppingCart.push(itemInCart);
    } else {
      for(var index=0; index< this.customerShoppingCart.length; index++) {
        let itemInLoop = this.customerShoppingCart[index];
        if (itemInLoop.item.itemId == itemInCart.item.itemId) {
          this.isExistingItem = true;
          let updatedItemInCart = this.customerShoppingCart[index];
          updatedItemInCart.quantity = updatedItemInCart.quantity + 1;
          this.customerShoppingCart[index] = updatedItemInCart;
        }
      }
      if (!this.isExistingItem) {
        this.customerShoppingCart.push(itemInCart);
      }
    }
    localStorage.setItem("custShopCart", JSON.stringify(this.customerShoppingCart));
  }
}
