///СИНХРОННЫЕ
setTimeout(() => {
    console.log("Выведено после начала работы цикла");
}, 1500);

for (let i = 0; i < 10000; i++) {
    console.log(`${i}`);
}

// function syncAwaitProgram() {
//     console.log("Начало выполнения программы");
//     let result1 = syncTask("Синхронная задача 1", 2000);
//     console.log(`Результат 1: ${result1}`);
//     let result2 = syncTask("Синхронная задача 2", 1000);
//     console.log(`Результат 2: ${result2}`);
//     console.log("Конец выполнения программы");
// }
// syncAwaitProgram();

// ///АСИНХРОННЫЕ
// const test = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Выведено до начала работы цикла");
//         resolve();
//     }, 6000);
// });
// test.then(() => {
//     for (let i = 0; i < 200; i++) {
//         console.log(i);
//     }
// });

// async function asyncAwaitProgram() {
//     console.log("Начало выполнения программы");

//     let result1 = await promiseTask("Promise задача 1", 2000);
//     console.log(`Результат 1: ${result1}`);

//     let result2 = await promiseTask("Promise задача 2", 1000);
//     console.log(`Результат 2: ${result2}`);

//     console.log("Конец выполнения программы");
// }
// asyncAwaitProgram();
//
//
// исправление асинхронности
//function syncTest() {
//     console.log("Начало синхронной задачи");

//     const startTime = Date.now();
//     while (Date.now() - startTime < 6000) {
//         // Пустой цикл - блокировка
//     }
//     console.log("спустя 6000 миллисекунд");

//     for (let i = 0; i < 200; i++) {
//         console.log(i);
//     }
//      console.log("Конец синхронной задачи");
// }
// syncTest();
//
//
// Ключевые различия:
// Блокировка: Теперь обе функции блокируют основной поток JavaScript во время имитации задержек, делая их синхронными.
// Последовательность: Все операции выполняются строго одна за другой.
// Нет асинхронности: Все асинхронные конструкции (Promise, setTimeout, async/await) были убраны.
// В заключение:

// Эти примеры показывают, как превратить асинхронный код в синхронный, блокирующий. Это может быть полезно для демонстрации различий между синхронным и асинхронным программированием, но в реальных приложениях синхронные блокирующие операции обычно не рекомендуются, особенно в JavaScript, где основной поток должен оставаться отзывчивым.
