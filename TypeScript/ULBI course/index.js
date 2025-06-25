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
defaultGenericValueFn(1);
defaultGenericValueFn([]);
defaultGenericValueFn(true);
defaultGenericValueFn([1]);
////
////
////
///////////////////////////////////////
