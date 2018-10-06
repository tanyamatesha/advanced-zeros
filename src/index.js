module.exports = function getZerosCount(number, base) {
    let arrFactorials = [];
    let t = 2;
    while (t < base) {
        while (base % t === 0) {
            arrFactorials.push(t);
            base /= t;
        }
        t++;
    }
    if (base > 1) {
        arrFactorials.push(base);
    }
    arrFactorials.sort((a, b) => a - b);

    let zeros = [];
    let count = 1;
    for (let i = 0; i < arrFactorials.length; i += count) {
        let counter = 0;
        for (let j = i; j < arrFactorials.length; j++) {
            if (arrFactorials[i] === arrFactorials[j]) {
                counter++;
            } else {
                count = counter;
                break;
            }
        }
        let result = 0;
        let j = arrFactorials[i];
        while (true) {
            result += (number - number % j) / j;
            j *= arrFactorials[i];
            if (j > number) {
                break;
            }
        }
        zeros.push((result - result % counter) / counter);

    }

    return Math.min.apply(Math, zeros);
};