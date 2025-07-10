"use strict";
// console.log("screw u guys");
///
///
///
//////////////////////////////////////////////
async function screw() {
    return "screw u guys";
}
///
///
///
//////////////////////////////////////////////
function sum(a, b, c) {
    if (c)
        return a + b + c;
    else
        return a + b;
}
// console.log(sum(7, 50));
// console.log(sum(7, 50, 4));
///
///
///
//////////////////////////////////////////////
let obj;
let obj2;
let user1 = {
    name: "Tenma",
    age: 22,
    skills: ["хирург", "гений"],
};
let user1Info = {
    email: "user1@gmail.com",
    address: "ru",
    cardNumber: "234-853-532-873",
};
let common = {
    ...user1,
    ...user1Info,
};
//
//
//
//////////////////////////////////////////////
const dayss = ["Monday", "Tuesday", "Wensday", "Saturday", "Friday", "Суббота", "Sunday"];
console.log(dayss[0]); //Вывод: "Monday"
const newArray = ["Gon", true, [1, 2, 3]];
//
//
//
////////////////////////////////////////////////ПЕРЕГРУЗКИ ФУНКЦИЙ:
const someFunction = (statemant, num) => {
    return num ? `${statemant} ${num} раз` : `${statemant}`;
};
function createPoint(x, y, z) {
    if (z === undefined) {
        return { x, y };
    }
    else {
        return { x, y, z };
    }
}
// console.log(createPoint(1, 2)); // Output: {x: 1, y: 2}
// console.log(createPoint(1, 2, 3)); // Output: {x: 1, y: 2, z: 3}
//createPoint(1); // error
//
//
//
//////////////////////////////////////////////CLASSES
class World {
    city;
    population;
    constructor(city, population, country = "Mexiko") {
        this.city = city;
        this.population = population;
        this.country = country;
    }
    country;
    getInfo() {
        console.log(`Город: ${this.city}\nНаселение: ${this.population}`);
    }
}
const Samara = new World("Samara", 1_200_000, "РАСИЯ");
let person1 = {
    name: "David",
    age: 24,
    nation: "Canadian",
    homeCity: "Toronto",
};
let person2 = {
    name: "Artur",
    age: 22,
    nation: "Russian",
    homeCity: "Moscow",
};
let person6 = {
    name: "Timur",
    age: 19,
    login: "Goddo",
    email: "shokirovttt192@gmail.com",
    IP: "188.165.163.162",
};
//
//
//
//////////////////////////////////////////////Enum
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
const userr = {
    role: EnumRoles.ADMIN,
    color: 2 /* EnumColors.white */,
};
//
//
//
//////////////////////////////////////////////Assertion
// const inputEl = document.querySelector("input");
// const value1 = (inputEl as HTMLInputElement).value;
// const value2 = (<HTMLInputElement>inputEl).value;
const getLength = (text) => {
    return text.length;
};
let person = { name: "Charlie" };
let streetName = person.address?.street;
// console.log(streetName); // Вывод: undefined
//////////////////////////////////////////////
