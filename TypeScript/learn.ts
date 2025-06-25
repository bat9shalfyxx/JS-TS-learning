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
function sum(a: number, b: number, c?: number) {
        if (c) return a + b + c;
        else return a + b;
}
// console.log(sum(7, 50));
// console.log(sum(7, 50, 4));
///
///
///
//////////////////////////////////////////////
let obj: unknown;
let obj2: undefined;
///
///
///
//////////////////////////////////////////////
type typeUser = {
    name: string;
    age: number;
    skills: string[];
};
type typeUserInfo = {
    email: string;
    address: string;
    cardNumber: string;
};
let user1: typeUser = {
    name: "Tenma",
    age: 22,
    skills: ["хирург", "гений"],
};
let user1Info: typeUserInfo = {
    email: "user1@gmail.com",
    address: "ru",
    cardNumber: "234-853-532-873",
};
let common: typeUser | typeUserInfo = {
    ...user1,
    ...user1Info,
};

//
//
//
//////////////////////////////////////////////
const days: ReadonlyArray<string> = ["Monday", "Tuesday", "Wensday", "Saturday", "Friday", "Суббота", "Sunday"];
console.log(days[0]); //Вывод: "Monday"
// days[0] = "Понедельник"; //Ошибка

//
//
//
//////////////////////////////////////////////
type TypeArray = [string, boolean, number[]];
const newArray: TypeArray = ["Gon", true, [1, 2, 3]];

//
//
//
////////////////////////////////////////////////ПЕРЕГРУЗКИ ФУНКЦИЙ:
const someFunc = (statemant: string, num?: number): string => {
    return num ? `${statemant} ${num} раз` : `${statemant}`;
};
// console.log(someFunc("была бы твоя мать рядом, я бы пинал ее"));
// console.log(someFunc("была бы твоя мать рядом, я бы пинал ее", 5));
function createPoint(x: number, y: number): { x: number; y: number };
function createPoint(x: number, y: number, z: number): { x: number; y: number; z: number };
function createPoint(x: number, y: number, z?: number): any {
    if (z === undefined) {
        return { x, y };
    } else {
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
    city: string;
    population: number;
    constructor(city: string, population: number, country: string = 'Mexiko') {
        this.city = city;
        this.population = population;
        this.country = country;
    }
    public country: string;

    getInfo(): void {
        console.log(`Город: ${this.city}\nНаселение: ${this.population}`);
    }
}
const Samara = new World("Samara", 1_200_000, "РАСИЯ");
// Samara.getInfo();
// console.log(Samara.country);

//
//
//
//////////////////////////////////////////////INTERFACES
interface IPerson {
    name: string;
    age: number;
    nation: string;
    homeCity: string;
}
let person1: IPerson = {
    name: "David",
    age: 24,
    nation: "Canadian",
    homeCity: "Toronto",
};

type TypePerson = {
    name: string;
    age: number;
    nation: string;
    homeCity: string;
};
let person2: TypePerson = {
    name: "Artur",
    age: 22,
    nation: "Russian",
    homeCity: "Moscow",
};

//
//
//
/////////////////////////////////////////////СЛОЖЕНИЕ ИНТЕРФЕЙСОВ
interface IUser extends IUserData {
    name: string;
    age: number;
}
interface IUserData {
    login: string;
    email: string;
    IP: string;
}

//
//
//
//////////////////////////////////////////////СЛОЖЕНИЕ ТИПОВ
type TypeUserData = {
    login: string;
    email: string;
    IP: string;
};
type TypeUser = {
    name: string;
    age: number;
} & TypeUserData;
let person6: TypeUser = {
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
enum EnumRoles {
    ADMIN,
    GUEST,
    USER,
}
const enum EnumColors {
    black,
    grey,
    white,
}
interface IUser_ {
    role: EnumRoles;
    color: EnumColors;
}
const user: IUser_ = {
    role: EnumRoles.ADMIN,
    color: EnumColors.white,
};

//
//
//
//////////////////////////////////////////////Assertion
// const inputEl = document.querySelector("input");
// const value1 = (inputEl as HTMLInputElement).value;
// const value2 = (<HTMLInputElement>inputEl).value;

const getLength = (text: string | null) => {
    return text!.length;
};
// console.log(getLength("some text"));
// console.log(getLength(null)); //Выдаст ошибку
//
interface Address {
    street?: string;
    city: string;
}
interface Person {
    name: string;
    address?: Address;
}
let person: Person = { name: "Charlie" };
let streetName = person.address?.street;
// console.log(streetName); // Вывод: undefined

///////////////////////////////////