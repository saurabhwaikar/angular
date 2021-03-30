export class Item {
    itemId: number;
    itemName: string;
    itemDescription: string;

    constructor(id: number, name: string, description: string) {
        this.itemId = id;
        this.itemName = name;
        this.itemDescription = description;
    }
}
