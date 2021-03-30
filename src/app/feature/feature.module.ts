import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [ItemComponent, ItemListComponent, ShoppingCartComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
