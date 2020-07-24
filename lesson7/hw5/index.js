const withdraw = (clients, balances, client, amount) => {
    const someIndex = clients.indexOf(client);
    const someBalances = [...balances];
    if ((someBalances[someIndex] = someBalances[someIndex] - amount) < 0) {
    return -1;
    } else {
    const newBalance = balances[someIndex] = balances[someIndex] - amount;
    return newBalance;
    }
}