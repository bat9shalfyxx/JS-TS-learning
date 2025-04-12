/////////////////////////////////fibonacci numbers
let count = 0;
const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    count++;
    console.log(fibonacci(n - 1) + fibonacci(n - 2));
    return fibonacci(n - 1) + fibonacci(n - 2);
};
// console.log("^_^ " + fibonacci(10));
// console.log("count: " + count);

/////////////////////////////////factorial
let count2 = 0;
let factorial = (n) => {
    count2++;
    return n == 1 ? n : n * factorial(n - 1);
};
// console.log(factorial(8));
// console.log(count2);
/////////////////////////////////Рекурсия в многоэтажной структуре
let company = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 600 },
    ],
    development: {
        sites: [
            { name: "Peter", salary: 2000 },
            { name: "Alex", salary: 1800 },
        ],
        internals: [{ name: "Jack", salary: 1300 }],
    },
};
function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}
console.log(sumSalaries(company)); // 6700

/////////////////////////////////////////recursive structures:
/////////////////////////////////CONNECTED LIST
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
list = { value: "0", next: list };
console.log(list);

//         cd tests/algorithms
//         node recursion
