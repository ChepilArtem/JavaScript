export const wallet = {
    transactions: [3, 56, 75, 100, 17],
    getMin() {
        return Math.min(...this.transactions);
    },
    getMax() {
        return Math.max(...this.transactions);
    },
};