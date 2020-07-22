function withdraw(clients, balances, client, amount) {
    let balance = balances;
    for (let i = 0; i < clients.length; i++) {
        while (clients[i] == client) {
        balance[i] = balances[i] - amount;
        }
        if (amount > balance[i]) return -1;
        return balance[i];
    }
}