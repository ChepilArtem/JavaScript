let getPrimes = (num) => {
    if (num <= 0 || !Number.isInteger(num)) {
        return null;
    }
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            return i;
        }
    }
};

function isPrime(num) {
    let count = 2;
    while (count < num) {
        if (num % count === 0) {
            return false;
        }
        count++;
    }
    return true;
}



