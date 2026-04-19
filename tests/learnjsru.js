/////////////////////////////
async function loadJson(url) {
    let response = await fetch(url);

    try {
        if (response.status == 200) {
            let json = await response.json();
            return json;
        }
    } catch(e) {
        throw new Error(`Ошибка: ${e}`);
    }

}

loadJson("https://jsonplaceholder.typicode.com/users");
// loadJson("http://no-such-user.json");

const constructFunc = function(a, b) {
    this.c = a;
    this.d = b;
}

const CFO = new constructFunc(1, '2');
console.log(CFO.c);

const func = () => {    
    let isFirstInvoke = true;
    
    return () => {
        if (isFirstInvoke) {
            isFirstInvoke = false;
            return console.log(true)
        };
        return console.log(false);
    }
}

const funcFunc = func();
funcFunc();
funcFunc();