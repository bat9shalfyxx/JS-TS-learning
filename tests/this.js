{
    const button = {
        text: 'Click me',
        handleClick() {
            console.log(this.text);
        }
    };

    // Без bind потеряется this
    // setTimeout(button.handleClick, 1000);      // undefined

    // С bind — всё работает
    // setTimeout(button.handleClick.bind(button), 1000); // "Click me"
}

{
    const createUser = function(name, id) {
        this.name = name;
        this.id = id;
        this.showInfo = function() { console.log(`User #${this.id}: ${this.name}`); }
    } 

    const user1 = new createUser("Howard", 1);
    const user2 = new createUser("Jim", 2);

    // user1.showInfo();
    // user2.showInfo();
    
    // user1.showInfo.bind(user2)();
}

console.log(`this === ${this}`); // >this === [object Object]

(() => {
console.log(`this === ${this}`); // >this === [object Object]
})();

(function() {
    console.log(`this === ${this}`); // > this === [object global]
})();