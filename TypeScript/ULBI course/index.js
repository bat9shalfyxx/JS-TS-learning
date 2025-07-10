"use strict";
/////////////////////////////////////// Any
let value0 = "str";
let value1 = value0;
let subType = { field1: "some", field2: 123, field3: [], field4: null };
let superType = subType;
// console.log(superType.field3); // Property 'field3' does not exist on type 'SuperType'
// console.log(JSON.stringify(superType)); // {"field1":"some","field2":123,"field3":[],"field4":null}
////
////
////
///////////////////////////////////////unknown
let validationFunc = (data) => {
    //let value: num = data; //Type 'unknown' is not assignable to type 'string'.
    let value;
    let value2;
    if (typeof data === "string") {
        value2 = data;
        console.log(value2);
    }
    else if (typeof data === "number") {
        value = data;
        console.log(value);
    }
    else if (Array.isArray(data)) {
        data = [];
        console.log(data);
    }
};
// validationFunc([14]);
//возможно:
let val1;
val1 = 1;
val1 = "str";
val1 = ["v", 1]; //массив any
let neverVal;
// let num: number = neverVal;
// console.log(typeof num);
var Values;
(function (Values) {
    Values[Values["FIRST"] = 0] = "FIRST";
    Values[Values["SECOND"] = 1] = "SECOND";
    Values[Values["THIRD"] = 2] = "THIRD";
})(Values || (Values = {}));
let traverse = (val) => {
    switch (val) {
        case Values.FIRST:
            console.log(1);
            return val;
        case Values.SECOND:
            console.log(2);
            return val;
        case Values.THIRD:
            return val;
        default:
            const check = val;
            return val;
    }
};
////
////
////
///////////////////////////////////////void
let someFunc = (a) => {
    console.log(a);
};
const user = {
    isActive: true,
    nickname: "Godo",
    id: "321_111_001",
    adress: {
        city: "Samara",
        coordinates: [14, 24, 51, 12],
    },
};
const adress = {
    coordinates: [1],
    // newProperty: true, //Object literal may only specify known properties, and 'newProperty' does not exist in type 'IAddress'.
};
const userArr = [
    {
        isActive: true,
        nickname: "Godo",
        id: "1",
        adress: {
            coordinates: [1, 2, 3],
        },
    },
    {
        isActive: true,
        nickname: "Guts",
        id: "2",
        adress: {
            coordinates: [3, 2, 1],
        },
    },
];
const days = ["Friday", "Saturday", "Thursday"];
const num = 32;
const wtf = { 1: "12" };
const day1 = "Monday";
let day2 = "Monday";
const dayObj = {
    day: "Wednesday",
};
const dayObj2 = {
    day: "Wednesday",
};
const whatAWonderfullDay = (day) => {
    console.log(`What a wonderfull ${day}!`);
};
let яЙошкарОловчанин = "Your city is Йошкар-Ола";
const implementationOfExampleAbove = "Можно любые значения прокидывать: true";
let readonlyExample = {
    field1: "123",
};
const response = {
    status: "success",
    requestId: "22",
    data: {
        title: "Some article.",
    },
};
const newResponse = {
    status: "success",
    requestId: {
        requestId: 14,
    },
    data: {
        title: "Some title",
    },
};
const treeNode = {
    id: "1",
    value: {
        username: "Godo",
    },
    children: [
        {
            id: "2",
            value: {
                username: "shalfy",
            },
            children: null,
        },
    ],
};
////Generics в функциях:
function genericFn(arg) {
    return arg;
}
genericFn(14);
const arrowGenericFn = (arg) => {
    return arg;
};
arrowGenericFn(treeNode);
let constrainedFn = (arg) => {
    return arg;
};
// constrainedFn<string>("sds"); // Type 'string' does not satisfy the constraint '{ id: string; userName: string; }'.
constrainedFn({ id: "q", userName: "Godo", data: [] });
let defaultGenericValueFn = (arg) => {
    console.log(typeof arg);
};
const impObj = {
    // id: 1, //Type 'number' is not assignable to type 'string'.
    id: "1k",
    nickname: "godo",
};
// const isArray: IsArray<string> = true; //Type 'true' is not assignable to type 'false'.
// const isArray2: IsArray<string[]> = false; //Type 'false' is not assignable to type 'true'.
const isArray3 = true;
const childeOf = {
    id: 1,
};
const notAChildeOf = {
    random: null,
};
////btw больше 100 строк на одни женерики ушло О_о
////
////
///////////////////////////////////////Сужение типов:
///typeof type guards:
let narrowingFn = (arg) => {
    if (typeof arg === "string") {
        return arg.toLowerCase();
    }
    else if (typeof arg === "number") {
        return arg.toString();
    }
    return arg; //У null нет методов т.к. у него нет "wrapper object"
};
let narrowingFn2 = (arg) => {
    if ("id" in arg) {
        return arg.id;
    }
    else if ("index" in arg) {
        return arg.index;
    }
    return arg;
};
////instanceof narrowing:
class Russians {
    iq;
    constructor(iq) {
        this.iq = iq;
    }
}
class Americans {
    iq;
    constructor(iq) {
        this.iq = iq;
    }
}
const slav = new Russians(900);
const pendos = new Americans(17);
const isSmartFn = (arg) => {
    if (arg instanceof Russians) {
        console.log("ur iq is unbelievably high...");
    }
    else if (arg instanceof Americans) {
        console.log("u're as dummy as fish.");
    }
};
class Human {
    sex;
    color;
    constructor(sex, color) {
        this.sex = sex;
        this.color = color;
    }
}
class RussianMan extends Human {
    iq;
    nation; //(*)
    constructor(sex, color, iq, nation) {
        super(sex, color);
        this.nation = nation;
        this.iq = iq;
    }
}
class AmericanMan extends Human {
    iq;
    nation; //(*)
    constructor(sex, color, iq, nation) {
        super(sex, color);
        this.nation = nation;
        this.iq = iq;
    }
}
const defineThePeople = (arg) => {
    switch (arg.nation) {
        case "pendos":
            break;
        case "russian":
            break;
    }
};
////
////
////
///////////////////////////////////////Type Guards:
class Car {
    oilCapacity;
    maxSpeed;
    constructor(a, b) {
        this.oilCapacity = a;
        this.maxSpeed = b;
    }
}
class NotACar {
    notOilCapacity;
    notMaxSpeed;
    constructor(a, b) {
        this.notOilCapacity = a;
        this.notMaxSpeed = b;
    }
}
const typeGuardFn = (arg) => {
    return 'oilCapacity' in arg && 'maxSpeed' in arg;
    return arg instanceof Car;
};
const isLada = (arg) => {
    return arg.type === 'lada';
};
const isBMW = (arg) => {
    return arg.type === 'bmw';
};
const defineTheCar = (arg) => {
    if (arg.type === 'bmw') {
        return arg.bmw;
    }
    else if (arg.type === 'lada') {
        return arg.age;
    }
    return arg;
};
const someObject = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true, // (**)
    randomProp: 11, // (??)
};
const someObject2 = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true,
};
const someObject3 = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true,
};
const someObject4 = {
    prop1: 14,
    prop2: 'string',
}; // satisfies SomeInterface; // obj does not satisfy the expected type;
const notSomeObject = {
    prop1: "NaN",
    prop2: 'string'
}; // as SomeInterface
const isSomeFunc = (arg) => {
    return (arg.prop1);
};
isSomeFunc(someObject);
// isSomeFunc(notSomeObject); //Argument of type is not assignable to type 'SomeInterface'.
// const str = '11122' as number; //Conversion of type 'string' to type 'number' may be a mistake
const str2 = 'str';
const parsedJSON = JSON.parse('{"some": true, "object": true}');
function JSONParse(data) {
    return JSON.parse(data);
}
// async function asyncParsing() {
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const parsedData = await data.json(); 
//         return  parsedData;
//         //parsed data is any type now
//     } catch(e) {
//         console.log('Error: ', e);
//         throw e;
//     }
// }
// function JSONParse<T>(data: string): T {
//     return JSON.parse(data) as T;
// }
// async function main() {
//     const res = await asyncParsing()
//     console.log(JSONParse(JSON.stringify(res)));
// }
// main()
////
const RolesToAssert = {
    admin: 'ADMIN',
    user: 'USER',
    guest: 'GUEST'
};
const rolesKeys = (data) => {
    return Object.keys(data);
};
const keys = rolesKeys(RolesToAssert);
console.log(rolesKeys(RolesToAssert));
console.log(Object.keys(RolesToAssert));
////
////  
////
///////////////////////////////////////
