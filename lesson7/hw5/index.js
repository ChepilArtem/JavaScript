const withdraw = (clients, balances, client, amount) => balances
[clients.indexOf(client)] <= amount ? balances
[clients.indexOf(client)] - amount : -1;

const res = withdraw(['Artem', 'Andrey', 'Vasiliy'], [100000, 220, -300], 'John', 250);

console.log(res);

