"use strict";
let i, j;
loop1: for (i = 0; i < 3; i++) {
    //Первый цикл, обозначенный меткой "loop1"
    loop2: for (j = 0; j < 3; j++) {
        //Второй цикл, обозначенный меткой "loop2"
        if (i === 1 && j === 1) {
            continue loop1;
        }
        console.log("i = " + i + ", j = " + j);
    }
}
/////////////////////////////////////////////
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Введите ваше имя: ", (name) => {
    console.log(`Привет, ${name}!`);
    rl.close();
});
/////////////////////////////////////////////
console.log(false == 0); //Вывод: false
console.log(false === 0);
/////////////////////////////////////////////
let student = {
    name: "Дмитрий",
    course: "HTML + CSS",
    level: "junior",
    statement() {
        console.log(`${this.name} c уровнем ${this.level} хочет поступить на курс ${this.course}`);
    },
};
student.statement();
/////////////////////////////////////////////
let str = "Привет";
str.test = 5; // (*)
console.log(str.test);
let newMap = new Map();
newMap.set(1, 1);
newMap.set(2, 1);
newMap.set(4, 1);
newMap.set(5, 2);
newMap[6] = 0;
console.log(newMap);
for (const key of newMap.keys()) {
    console.log(key);
}
//  node test
