import { Item } from "./item.model";

export class ItemInCart {
    item : Item;
    quantity: number;
    volume: number;

    constructor(item: Item, quantity: number, volume: number) {
        this.item = item;
        this.quantity = quantity;
        this.volume = volume;
    }

    printDetails() {
        console.log("Item In Cart ::  " + this.item.itemName + " - " + this.quantity);
    }
}