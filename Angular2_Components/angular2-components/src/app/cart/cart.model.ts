export class Cart {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: string,
        public isAvailable?: boolean,
        public description?: string,
        public quantity?: number
    ){
        this.id =  id || null;
        this.isAvailable = isAvailable || false;
        this.quantity = quantity || 1;
    }
}