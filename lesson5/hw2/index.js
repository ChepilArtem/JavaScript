let getPrimes = (num) => {
    if (num <= 0 || !Number.isInteger(num)) {
        return null;
    }
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

