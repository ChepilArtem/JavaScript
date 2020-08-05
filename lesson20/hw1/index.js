export class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price < 1000) {
            return false;
        }
        return true;
    }

    confirmOrder() {
        if (!this.isConfirmed) { 
            this.isConfirmed = true;
            this.dateConfirmed = new Date();
        }
    }

    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {
            return true;
        }
        return false;
    }
};

const newOrder = new Order(1001, 'Buy', 'Sell');

console.log(newOrder);
// console.log(newOrder.checkPrice());
// console.log(newOrder.confirmOrder());
// console.log(newOrder.isValidType());

