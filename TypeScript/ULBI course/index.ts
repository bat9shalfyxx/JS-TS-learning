/////////////////////////////////////// Any
let value0: any = "str";
let value1: number = value0;
// console.log(typeof value1); // string

////
////
////
///////////////////////////////////////intersection  type:
type Persona = {
    firstName: string;
    lastName: string;
    age: number;
};
type User = {
    id: string;
} & Persona;

interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}
interface IUser {
    id: string;
}
type Union = IPerson & IUser;

////
////
////
///////////////////////////////////////SubType & SuperType
type SuperType = {
    field1: string;
    field2: number;
};
type SubType = {
    field1: string;
    field2: number;
    field3: object;
    field4: null;
};

let subType: SubType = { field1: "some", field2: 123, field3: [], field4: null };
let superType: SuperType = subType;
// console.log(superType.field3); // Property 'field3' does not exist on type 'SuperType'
// console.log(JSON.stringify(superType)); // {"field1":"some","field2":123,"field3":[],"field4":null}

////
////
////
///////////////////////////////////////unknown
let validationFunc = (data: unknown): void => {
    //let value: num = data; //Type 'unknown' is not assignable to type 'string'.
    let value: number;
    let value2: string;
    if (typeof data === "string") {
        value2 = data;
        console.log(value2);
    } else if (typeof data === "number") {
        value = data;
        console.log(value);
    } else if (Array.isArray(data)) {
        data = [];
        console.log(data);
    }
};
// validationFunc([14]);
//возможно:
let val1: unknown;
val1 = 1;
val1 = "str";
val1 = ["v", 1]; //массив any
//невозможно:
// let val2: string;
// val2 = val1;

////
////
////
///////////////////////////////////////never
type neverEver = string & number;
let neverVal: never;
// let num: number = neverVal;
// console.log(typeof num);
enum Values {
    FIRST,
    SECOND,
    THIRD,
}
let traverse = (val: Values) => {
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
            const check: never = val;
            return val;
    }
};

////
////
////
///////////////////////////////////////void
let someFunc = (a: void[]) => {
    console.log(a);
};
// someFunc([]);

////
////
////
///////////////////////////////////////Composite types
interface IAddress {
    city?: string;
    street?: string;
    coordinates: number[];
}
type UserType = {
    isActive: boolean;
    nickname: string;
    id: string;
    adress: IAddress;
};
const user: UserType = {
    isActive: true,
    nickname: "Godo",
    id: "321_111_001",
    adress: {
        city: "Samara",
        coordinates: [14, 24, 51, 12],
    },
};
const adress: IAddress = {
    coordinates: [1],
    // newProperty: true, //Object literal may only specify known properties, and 'newProperty' does not exist in type 'IAddress'.
};
const userArr: UserType[] = [
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

////
////
////
///////////////////////////////////////Литералы
type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
const days: Days[] = ["Friday", "Saturday", "Thursday"];

type PowersOfTwo = 2 | 4 | 8 | 16 | 32 | 64;
const num: PowersOfTwo = 32;

type United = [1, 2] | true | { 1: string; str?: boolean } | "SomeString";
const wtf: United = { 1: "12" };

const day1 = "Monday";
let day2 = "Monday";
const dayObj = {
    day: "Wednesday",
};
const dayObj2 = {
    day: "Wednesday",
} as const;
const whatAWonderfullDay = (day: Days) => {
    console.log(`What a wonderfull ${day}!`);
};
// whatAWonderfullDay(day1);
// whatAWonderfullDay(dayObj2.day);
// whatAWonderfullDay(day2);
// whatAWonderfullDay(dayObj.day);

///Шаблонные литералы:
type Cities = "Челяба" | "Магадан" | "Йошкар-Ола";
type YourCityIs = `Your city is ${Cities}`;

let яЙошкарОловчанин: YourCityIs = "Your city is Йошкар-Ола";

type Example = `Можно любые значения прокидывать: ${boolean}`;
const implementationOfExampleAbove: Example = "Можно любые значения прокидывать: true";
////
////
////
///////////////////////////////////////readonly
interface IReadOnlySample {
    readonly field1: string;
}
let readonlyExample: IReadOnlySample = {
    field1: "123",
};
// readonlyExample.field1 = "str"; //Cannot assign to 'field1' because it is a read-only property.

////
////
////
///////////////////////////////////////Generics
interface UserInfo {
    username: string;
}
interface Article {
    title: string;
}
interface ApiResponse<T> {
    status: "error" | "success";
    requestId: string;
    data: T;
}
const response: ApiResponse<Article> = {
    status: "success",
    requestId: "22",
    data: {
        title: "Some article.",
    },
};

type Status = "error" | "success";
interface MultipleApiResponse<F, S, T> {
    status: F;
    requestId: S;
    data: T;
}
const newResponse: MultipleApiResponse<Status, { requestId: number }, Article> = {
    status: "success",
    requestId: {
        requestId: 14,
    },
    data: {
        title: "Some title",
    },
};
////
interface Tree<T> {
    id: string;
    value: T;
    children: Tree<T>[] | null;
}
const treeNode: Tree<UserInfo> = {
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
function genericFn<T>(arg: T): T {
    return arg;
}
genericFn<number>(14);

const arrowGenericFn = <T>(arg: T): T => {
    return arg;
};
arrowGenericFn<Tree<UserInfo>>(treeNode);

////Generics constrain:
type ConstrainType = {
    id: string;
    userName: string;
    data: Object | null;
};
let constrainedFn = <T extends { id: string; userName: string }>(arg: T): T => {
    return arg;
};
// constrainedFn<string>("sds"); // Type 'string' does not satisfy the constraint '{ id: string; userName: string; }'.
constrainedFn<ConstrainType>({ id: "q", userName: "Godo", data: [] });

let defaultGenericValueFn = <T = string>(arg: T) => {
    console.log(typeof arg);
};
interface IDefaultGenericValueFn<T = string> {
    id: T;
    nickname: T;
}
const impObj: IDefaultGenericValueFn = {
    // id: 1, //Type 'number' is not assignable to type 'string'.
    id: "1k",
    nickname: "godo",
};
////Условные типы в Generics:
type IsArray<T> = T extends any[] ? true : false;
// const isArray: IsArray<string> = true; //Type 'true' is not assignable to type 'false'.
// const isArray2: IsArray<string[]> = false; //Type 'false' is not assignable to type 'true'.
const isArray3: IsArray<string[]> = true;

interface JustExample extends IDefaultGenericValueFn {}
type IsChildrenOfIDefaultGenericValueFnType<T> = T extends IDefaultGenericValueFn ? { id: number } : { random: any };
const childeOf: IsChildrenOfIDefaultGenericValueFnType<JustExample> = {
    id: 1,
};
const notAChildeOf: IsChildrenOfIDefaultGenericValueFnType<string> = {
    random: null,
};
////btw больше 100 строк на одни женерики ушло О_о
////
////
///////////////////////////////////////Сужение типов:
///typeof type guards:
let narrowingFn = (arg: string | number | null) => {
    if (typeof arg === "string") {
        return arg.toLowerCase();
    } else if (typeof arg === "number") {
        return arg.toString();
    }
    return arg; //У null нет методов т.к. у него нет "wrapper object"
};
////The in operator narrowing:
type NarrowingType = {
    type: any;
    index: any;
};
interface INarrowing {
    type: any;
    id: number;
}
let narrowingFn2 = (arg: NarrowingType | INarrowing) => {
    if ("id" in arg) {
        return arg.id;
    } else if ("index" in arg) {
        return arg.index;
    }

    return arg;
};

////instanceof narrowing:
class Russians {
    iq: number;
    constructor(iq: number) {
        this.iq = iq;
    }
}
class Americans {
    iq: number;
    constructor(iq: number) {
        this.iq = iq;
    }
}
const slav = new Russians(900);
const pendos = new Americans(17);
const isSmartFn = (arg: Russians | Americans) => {
    if (arg instanceof Russians) {
        console.log("ur iq is unbelievably high...");
    } else if (arg instanceof Americans) {
        console.log("u're as dummy as fish.");
    }
};

////## Decriminated unions:
type Sex = "male" | "female";
type Color = "black" | "white" | "yellow";
class Human {
    sex: Sex;
    color: Color;
    constructor(sex: Sex, color: Color) {
        this.sex = sex;
        this.color = color;
    }
}
class RussianMan extends Human {
    iq: bigint;
    nation: "russian"; //(*)
    constructor(sex: Sex, color: Color, iq: bigint, nation: "russian") {
        super(sex, color);
        this.nation = nation;
        this.iq = iq;
    }
}
class AmericanMan extends Human {
    iq: number;
    nation: "pendos"; //(*)
    constructor(sex: Sex, color: Color, iq: number, nation: "pendos") {
        super(sex, color);
        this.nation = nation;
        this.iq = iq;
    }
}
type cheliks = RussianMan | AmericanMan;
const defineThePeople = (arg: cheliks) => {
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
    oilCapacity: number;
    maxSpeed: number; 
    constructor(a: number, b: number) {
        this.oilCapacity =  a;
        this.maxSpeed = b;
    }
}
class NotACar {
    notOilCapacity: number;
    notMaxSpeed: number;
    constructor(a: number, b: number) {
        this.notOilCapacity =  a;
        this.notMaxSpeed = b;
    }
}
const typeGuardFn = (arg: any): arg is Car => {
    return 'oilCapacity' in arg && 'maxSpeed' in arg; 
    return arg instanceof Car;
}
////
interface ICar {
    maxSpeed: number;
    price: number;
}
interface ILada extends ICar {
    type: 'lada';
    age: bigint;
}
interface IBMW extends ICar {
    type: 'bmw';
    bmw: true;
}

const isLada = (arg: any): arg is ILada => {
    return arg.type === 'lada';
}
const isBMW = (arg: any): arg is IBMW => {
    return arg.type === 'bmw';
}
const defineTheCar = (arg: ILada | IBMW) => {
    if(arg.type === 'bmw') {
        return arg.bmw
    } else if(arg.type === 'lada') {
        return arg.age
    }
    return arg;
}

////
////
////
///////////////////////////////////////Преобразование типов:
interface SomeInterface {
    prop1: number;
    prop2: string;
    requiredProp: boolean; // (*)
}

const someObject = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true, // (**)
    randomProp:11, // (??)
} as SomeInterface

const someObject2 = <SomeInterface> {
    prop1: 14,
    prop2: 'string',
    requiredProp: true, 
}

const someObject3 = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true, 
} satisfies SomeInterface;
const someObject4 = {
    prop1: 14,
    prop2: 'string',
} // satisfies SomeInterface; // obj does not satisfy the expected type;

const notSomeObject = { 
    prop1: "NaN",
    prop2: 'string'
} // as SomeInterface

const isSomeFunc = (arg:SomeInterface) => {
    return (arg.prop1);
}
isSomeFunc(someObject);
// isSomeFunc(notSomeObject); //Argument of type is not assignable to type 'SomeInterface'.

// const str = '11122' as number; //Conversion of type 'string' to type 'number' may be a mistake
const str2 = 'str' as unknown as number;

////
////Примеры допустимого использования as:
interface IParsed {
    some: boolean;
    object: boolean;
}
const parsedJSON = JSON.parse('{"some": true, "object": true}');

function JSONParse<T>(data: string): T {
    return JSON.parse(data) as T;
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
} as const;

const rolesKeys = <T extends object>(data: T): Array<keyof T> => {
    return Object.keys(data) as Array<keyof T>
}
const keys = rolesKeys(RolesToAssert);  
console.log(rolesKeys(RolesToAssert));
console.log(Object.keys(RolesToAssert));

////
////  
////
///////////////////////////////////////