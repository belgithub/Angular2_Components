export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: string,
        public isAvailable?: boolean,
        public description?: string,
        public quantity?: number,
        public selected?: boolean,
        public highlighted?: boolean
    ){
        this.id =  id || null;
        this.isAvailable = isAvailable || false;
        this.quantity = quantity || 1;
        this.selected = selected || false;
        this.highlighted = highlighted || false;
    }
}