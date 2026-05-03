"use strict";
/* -----------------------------> var | function scope */
const func = () => {
    {
        var x = 7;
        let y = 10;
    }
    const innerFunc = () => {
        // console.log(`x = ${x}`); > x = 7;
        // console.log(`y = ${y}`) > ReferenceError: y is not defined
    }
    innerFunc()
}
func();
// console.log(x) > ReferenceError: x is not defined

{
    var a = 7;
    let b = 10;
}
// console.log(a) > 7
// console.log(b) > ReferenceError: b is not defined

/* -----------------------------> */

// console.log(globalThis + "\n")
// console.log(process.pid)
// console.log(process.version)

/* -----------------------------> */
const delayedVar = () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            // console.log(i);
        }, 500)
    }
    // > 5 5 5 5 5
    
    //1st solution:
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            // console.log(i);
        }, 500)
    }
    // > 0 1 2 3 4
    
    //2nd solution:
    for (let i = 0; i < 5; i++) {
        setTimeout((j) => {
            // console.log(j);
        }, 500, i)
    }
    // > 0 1 2 3 4
    
    //3rd solution:
    for (let i = 0; i < 5; i++) {
        ((j) => {
            setTimeout(() => {
                // console.log(j);
            }, 500)
        })(i)
    }(i)
    // > 0 1 2 3 4
}

/* -----------------------------> object's descriptors */

const obj = {
    a: 13
};

Object.defineProperty(obj, "region", {
    value: "WE",
    writable: false,
    enumerable: false,
    configurable: true,    
})

obj.a = 3;
obj.name = "IO"
// obj.region = "EU"; > Cannot assign to read only property 'region' of object '#<Object>'
// console.log(obj.a); > 3
// console.log(obj.name); > IO
// console.log(obj.region); WE
// console.log(Object.keys(obj)) // > [ 'a', 'name' ]


////adding descriptors to each property:
const obj1 = Object.assign({z: null, y: true}, obj);
obj1.age = 20;

Object.keys(obj1).forEach((key) => {
    Object.defineProperty(obj1, key, {
        writable: false,
        enumerable: true,
        configurable: false,    
    })
})

// obj1.y = false; > Cannot assign to read only property 'y' of object '#<Object>'
// delete obj1.age; > Cannot delete property 'age' of #<Object>

/////////// prevent to extend object
const obj2 = {x: 14, y: 15};
Object.preventExtensions(obj2); //forbids to extend, yet allows to change or remove existing properties

obj2.x = 1;
obj2.y = -132;
// obj2.z = 13; > Cannot add property z, object is not extensible
// console.log(obj2.x); > 1
// console.log(obj2.y); > -132
delete obj2.y;
// console.log(obj2) > { x: 1 }


/////////// prevent to extend object and to delete its properties
const obj3 = Object.assign({}, obj);
Object.seal(obj3); //forbids to extend or to delete properties, yet allows to change them (if writable === true)

// delete obj3.a; > Cannot delete property 'a' of #<Object>
// obj3.b = 13; > Cannot add property b, object is not extensible
// console.log(obj3)


/////////// prevent to extend, delete or to change
const obj4 = Object.assign(obj);
Object.freeze(obj4) //forbids to extend, delete, or change existing properties

// delete obj4.a; > Cannot delete property 'a' of #<Object>
// obj4.a = "six"; > Cannot assign to read only property 'a' of object '#<Object>'
// obj4.s = 7; > Cannot add property s, object is not extensible


/* -----------------------------> obj deep copying*/
{
    const obj = {
        number: 404,
        string: "string",
        array: [1, true, NaN, [1, 2, 3]],
        subObject: {
            x: 1,
            y:13,
            subArr: []
        }
    }
    
    const shallowCopy = {...obj};
    const shallowCopy2 = Object.assign({}, obj);
    
    const deepCopy = JSON.parse(JSON.stringify(obj));
    const deepCopy2 = structuredClone(obj);
    
    obj.subObject.z = -98
    // console.log(deepCopy.subObject) > { x: 1, y: 13 }
    // console.log(deepCopy2.subObject) > { x: 1, y: 13 }
    
    // ---> own deep copying function:
    const deepCopyFunc = (value) => {
        if (typeof value !== "object" || value === null) {
            return value;
        }
        
        if (Array.isArray(value)) {
            return value.map(item => deepCopyFunc(item));
        }
        
        return Object.fromEntries(Object.entries(value).map(([key, value]) => [key, deepCopyFunc(value)]));
    }
    
    const deepCopyObj = deepCopyFunc(obj);
    obj.subObject.subArr.push(1)
    // console.log(deepCopyObj);
}

/* -----------------------------> */

{
    // ---> WeakMap | WeakSet | Garbage Collector in action
    const wSet = new WeakSet();
    const wMap = new WeakMap();

    let weakSetObject = {x: 1, y:-1};
    let weakMapObject = {x: -1, y:1};
    
    wSet.add(weakSetObject);
    wMap.set(weakMapObject, true);

    // console.log(wSet.has(weakSetObject)); //> true
    // console.log(wMap.has(weakMapObject)); //> true
    
    weakMapObject = null;
    weakSetObject = null;
    
    // console.log(wSet.has(weakSetObject)); //> false
    // console.log(wMap.has(weakMapObject)); //> false
    

    // ---> Boolean
    let flag = new Boolean(false);
    // if (flag) console.log(`${flag} is object > always truthy`);
    
    // console.log(flag);
    // console.log(typeof flag);
    // console.log(typeof flag.valueOf());
    // console.log(flag == false);
    // console.log(flag === false);
    // console.log(flag.valueOf() === false);
    // console.log(!!!!!!!!!!!!!!!!flag);
    

    // ---> Symbol
    const uniqueKey = Symbol('key');
    const uniqueKey2 = Symbol('key');
    
    // console.log(uniqueKey.description);
    // console.log(uniqueKey === uniqueKey2);
    // console.log(uniqueKey.valueOf());
    // console.log(uniqueKey.valueOf() === uniqueKey2.valueOf());
    // console.log(typeof uniqueKey);
    // console.log(typeof uniqueKey.valueOf());
    
    
    // ---> RegExp
    const validEmail = "shokirovttt192@gmail.com";
    const invalidEmail = "shokirovtttgmail.com.@";
    const EMAIL_VALIDATOR = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // console.log(EMAIL_VALIDATOR.constructor);
    // console.log(EMAIL_VALIDATOR.test(validEmail));
    // console.log(EMAIL_VALIDATOR.test(invalidEmail));
    // console.log(invalidEmail.match(EMAIL_VALIDATOR));
    // console.log(validEmail.match(/@gmail.com/));
}

/* -----------------------------> const vs let in terms of optimization */ 
{
    const ITERATIONS = 10_000_000_000;
    
    const constIterations = () => {
        const initialObj = {value: 4};
        let sum = 0;
        
        for (let i = 0; i < ITERATIONS; i++) {
            sum += initialObj.value;
        }
        
        return sum;
    };
    
    const letIterations = () => {
        let initialObj = {value: 4};
        let sum = 0;
        
        for (let i = 0; i < ITERATIONS; i++) {
            sum += initialObj.value;
        }
        
        return sum;
    };
    
    const warmup = () => {
        for (let i = 0; i < 10000; i++) {
            letIterations();
            constIterations();
        }
    }
    // warmup();
    
    // const start1 = Date.now();
    // constIterations();
    // console.log(`${Date.now()  - start1}ms`)
    
    // const start2 = Date.now();
    // letIterations();
    // console.log(`${Date.now()  - start2}ms`)
}


/* -----------------------------> strict srtict comparison */
{
    // console.log(NaN == NaN); // > false
    // console.log(0 == -0); // > true
    
    // console.log(Object.is(NaN == NaN)); // > true
    // console.log(Object.is(0 == -0)); // > false
    
    
    // console.log(13121 / 0)
    // console.log(typeof 13121 / 0)
    // console.log(typeof 13121 / false)
    // console.log(typeof NaN)
    // console.log(Number.isNaN(typeof 1231 / 0)); // > true
}


/* -----------------------------> closures */
{
    const counter = () => {
        let counter = 0;
        
        return () => ++counter;
    }

    const counter1 = counter();
    console.log(counter1()); // 1
    console.log(counter1()); // 2
    console.log(counter1()); // 3

    const counter2 = counter();
    console.log(counter2()); // 1
}