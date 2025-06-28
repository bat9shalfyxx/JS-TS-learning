var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/////////////////////////////////////// Any
var value0 = "str";
var value1 = value0;
var subType = { field1: "some", field2: 123, field3: [], field4: null };
var superType = subType;
// console.log(superType.field3); // Property 'field3' does not exist on type 'SuperType'
// console.log(JSON.stringify(superType)); // {"field1":"some","field2":123,"field3":[],"field4":null}
////
////
////
///////////////////////////////////////unknown
var validationFunc = function (data) {
    //let value: num = data; //Type 'unknown' is not assignable to type 'string'.
    var value;
    var value2;
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
var val1;
val1 = 1;
val1 = "str";
val1 = ["v", 1]; //массив any
var neverVal;
// let num: number = neverVal;
// console.log(typeof num);
var Values;
(function (Values) {
    Values[Values["FIRST"] = 0] = "FIRST";
    Values[Values["SECOND"] = 1] = "SECOND";
    Values[Values["THIRD"] = 2] = "THIRD";
})(Values || (Values = {}));
var traverse = function (val) {
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
            var check = val;
            return val;
    }
};
////
////
////
///////////////////////////////////////void
var someFunc = function (a) {
    console.log(a);
};
var user = {
    isActive: true,
    nickname: "Godo",
    id: "321_111_001",
    adress: {
        city: "Samara",
        coordinates: [14, 24, 51, 12],
    },
};
var adress = {
    coordinates: [1],
    // newProperty: true, //Object literal may only specify known properties, and 'newProperty' does not exist in type 'IAddress'.
};
var userArr = [
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
var days = ["Friday", "Saturday", "Thursday"];
var num = 32;
var wtf = { 1: "12" };
var day1 = "Monday";
var day2 = "Monday";
var dayObj = {
    day: "Wednesday",
};
var dayObj2 = {
    day: "Wednesday",
};
var whatAWonderfullDay = function (day) {
    console.log("What a wonderfull ".concat(day, "!"));
};
var яЙошкарОловчанин = "Your city is Йошкар-Ола";
var implementationOfExampleAbove = "Можно любые значения прокидывать: true";
var readonlyExample = {
    field1: "123",
};
var response = {
    status: "success",
    requestId: "22",
    data: {
        title: "Some article.",
    },
};
var newResponse = {
    status: "success",
    requestId: {
        requestId: 14,
    },
    data: {
        title: "Some title",
    },
};
var treeNode = {
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
var arrowGenericFn = function (arg) {
    return arg;
};
arrowGenericFn(treeNode);
var constrainedFn = function (arg) {
    return arg;
};
// constrainedFn<string>("sds"); // Type 'string' does not satisfy the constraint '{ id: string; userName: string; }'.
constrainedFn({ id: "q", userName: "Godo", data: [] });
var defaultGenericValueFn = function (arg) {
    console.log(typeof arg);
};
var impObj = {
    // id: 1, //Type 'number' is not assignable to type 'string'.
    id: "1k",
    nickname: "godo",
};
// const isArray: IsArray<string> = true; //Type 'true' is not assignable to type 'false'.
// const isArray2: IsArray<string[]> = false; //Type 'false' is not assignable to type 'true'.
var isArray3 = true;
var childeOf = {
    id: 1,
};
var notAChildeOf = {
    random: null,
};
////btw больше 100 строк на одни женерики ушло О_о
////
////
///////////////////////////////////////Сужение типов:
///typeof type guards:
var narrowingFn = function (arg) {
    if (typeof arg === "string") {
        return arg.toLowerCase();
    }
    else if (typeof arg === "number") {
        return arg.toString();
    }
    return arg; //У null нет методов т.к. у него нет "wrapper object"
};
var narrowingFn2 = function (arg) {
    if ("id" in arg) {
        return arg.id;
    }
    else if ("index" in arg) {
        return arg.index;
    }
    return arg;
};
////instanceof narrowing:
var Russians = /** @class */ (function () {
    function Russians(iq) {
        this.iq = iq;
    }
    return Russians;
}());
var Americans = /** @class */ (function () {
    function Americans(iq) {
        this.iq = iq;
    }
    return Americans;
}());
var slav = new Russians(900);
var pendos = new Americans(17);
var isSmartFn = function (arg) {
    if (arg instanceof Russians) {
        console.log("ur iq is unbelievably high...");
    }
    else if (arg instanceof Americans) {
        console.log("u're as dummy as fish.");
    }
};
var Human = /** @class */ (function () {
    function Human(sex, color) {
        this.sex = sex;
        this.color = color;
    }
    return Human;
}());
var RussianMan = /** @class */ (function (_super) {
    __extends(RussianMan, _super);
    function RussianMan(sex, color, iq, nation) {
        var _this = _super.call(this, sex, color) || this;
        _this.nation = nation;
        _this.iq = iq;
        return _this;
    }
    return RussianMan;
}(Human));
var AmericanMan = /** @class */ (function (_super) {
    __extends(AmericanMan, _super);
    function AmericanMan(sex, color, iq, nation) {
        var _this = _super.call(this, sex, color) || this;
        _this.nation = nation;
        _this.iq = iq;
        return _this;
    }
    return AmericanMan;
}(Human));
var defineThePeople = function (arg) {
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
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.oilCapacity = a;
        this.maxSpeed = b;
    }
    return Car;
}());
var NotACar = /** @class */ (function () {
    function NotACar(a, b) {
        this.notOilCapacity = a;
        this.notMaxSpeed = b;
    }
    return NotACar;
}());
var typeGuardFn = function (arg) {
    return 'oilCapacity' in arg && 'maxSpeed' in arg;
    return arg instanceof Car;
};
var isLada = function (arg) {
    return arg.type === 'lada';
};
var isBMW = function (arg) {
    return arg.type === 'bmw';
};
var defineTheCar = function (arg) {
    if (arg.type === 'bmw') {
        return arg.bmw;
    }
    else if (arg.type === 'lada') {
        return arg.age;
    }
    return arg;
};
var someObject = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true, // (**)
    randomProp: 11, // (??)
};
var someObject2 = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true,
};
var someObject3 = {
    prop1: 14,
    prop2: 'string',
    requiredProp: true,
};
var someObject4 = {
    prop1: 14,
    prop2: 'string',
}; // satisfies SomeInterface; // obj does not satisfy the expected type;
var notSomeObject = {
    prop1: "NaN",
    prop2: 'string'
}; // as SomeInterface
var isSomeFunc = function (arg) {
    return (arg.prop1);
};
isSomeFunc(someObject);
// isSomeFunc(notSomeObject); //Argument of type is not assignable to type 'SomeInterface'.
// const str = '11122' as number; //Conversion of type 'string' to type 'number' may be a mistake
var str2 = 'str';
var parsedJSON = JSON.parse('{"some": true, "object": true}');
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
var RolesToAssert = {
    admin: 'ADMIN',
    user: 'USER',
    guest: 'GUEST'
};
var rolesKeys = function (data) {
    return Object.keys(data);
};
console.log(rolesKeys(RolesToAssert));
console.log(Object.keys(RolesToAssert));
////
////  
////
///////////////////////////////////////
