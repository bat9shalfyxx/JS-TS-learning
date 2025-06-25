var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// console.log("screw u guys");
///
///
///
//////////////////////////////////////////////
function screw() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "screw u guys"];
        });
    });
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
var obj;
var obj2;
var user1 = {
    name: "Tenma",
    age: 22,
    skills: ["хирург", "гений"],
};
var user1Info = {
    email: "user1@gmail.com",
    address: "ru",
    cardNumber: "234-853-532-873",
};
var common = __assign(__assign({}, user1), user1Info);
//
//
//
//////////////////////////////////////////////
var days = ["Monday", "Tuesday", "Wensday", "Saturday", "Friday", "Суббота", "Sunday"];
console.log(days[0]); //Вывод: "Monday"
var newArray = ["Gon", true, [1, 2, 3]];
//
//
//
////////////////////////////////////////////////ПЕРЕГРУЗКИ ФУНКЦИЙ:
var someFunc = function (statemant, num) {
    return num ? "".concat(statemant, " ").concat(num, " \u0440\u0430\u0437") : "".concat(statemant);
};
function createPoint(x, y, z) {
    if (z === undefined) {
        return { x: x, y: y };
    }
    else {
        return { x: x, y: y, z: z };
    }
}
// console.log(createPoint(1, 2)); // Output: {x: 1, y: 2}
// console.log(createPoint(1, 2, 3)); // Output: {x: 1, y: 2, z: 3}
//createPoint(1); // error
//
//
//
//////////////////////////////////////////////CLASSES
var World = /** @class */ (function () {
    function World(city, population, country) {
        if (country === void 0) { country = 'Mexiko'; }
        this.city = city;
        this.population = population;
        this.country = country;
    }
    World.prototype.getInfo = function () {
        console.log("\u0413\u043E\u0440\u043E\u0434: ".concat(this.city, "\n\u041D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u0435: ").concat(this.population));
    };
    return World;
}());
var Samara = new World("Samara", 1200000, "РАСИЯ");
Samara.getInfo();
console.log(Samara.country);
var person1 = {
    name: "David",
    age: 24,
    nation: "Canadian",
    homeCity: "Toronto",
};
var person2 = {
    name: "Artur",
    age: 22,
    nation: "Russian",
    homeCity: "Moscow",
};
var person6 = {
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
var user = {
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
var getLength = function (text) {
    return text.length;
};
var person = { name: "Charlie" };
var streetName = (_a = person.address) === null || _a === void 0 ? void 0 : _a.street;
// console.log(streetName); // Вывод: undefined
///////////////////////////////////
