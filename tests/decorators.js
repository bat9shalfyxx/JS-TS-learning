// let factorial = (n) => {
//     return n === 1 ? n : n * factorial(n - 1);
// };
// let start = Date.now();
// factorial = cachingDecorator(factorial);
// console.log(factorial(170));
// factorial(1500);
// factorial(1500);
// factorial(1500);
// let end = Date.now() - start;
// console.log(end);
//7
///////////////////////////////////////Collatz conjeture:
let cachingDecorator = (func) => {
    let cache = new Map();
    return (n) => {
        if (cache.has(n)) {
            return cache.get(n);
        }
        let result = func(n);
        cache.set(n, result);
        return result;
    };
};
let steps = 0;
let collatzAlgo = (x) => {
    let y = x;
    let arr = [];
    if (x === 2500) {
        console.log(steps);
        return 1;
    }
    while (y !== 1) {
        steps++;
        if (y % 2 === 0) {
            y /= 2;
        } else {
            y = y * 3 + 1;
        }
        arr.push(y);
    }
    console.log(arr);
    return collatzAlgo(x + 1);
};
let start = new Date();
collatzAlgo = cachingDecorator(collatzAlgo);
console.log(collatzAlgo(1));
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
collatzAlgo(1);
let end = new Date() - start;
console.log(end);
// +- =3500mls
