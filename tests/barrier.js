const client1 = {
    accountId: 1,
    userName: "SomeName",
    balance: 10_000,
};
const client2 = {
    accountId: 2,
    userName: "OtherName",
    balance: 27_000,
};

console.log(`Стартовый баланс отправителя: ${client1.balance}`);
console.log(`Стартовый баланс получателя: ${client2.balance}\n`);

//Пример с использованием барьера:
async function transactionByUsingBarrier(fromAccount, amount, toAccount) {
    let state = Math.random() > 0.5; //Иммитация стабильности работы сервера

    function checkBalance() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (fromAccount.balance >= amount) {
                    resolve(true);
                } else {
                    reject("Не достаточно средств");
                }
            }, Math.random() * 500);
        });
    }

    function transferAcception(state) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state) {
                    resolve(true);
                } else {
                    reject("Не удалось перевести средства. Повторите попытку.");
                }
            }, Math.random() * 500);
        });
    }

    function confirmTransaction(state) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state) {
                    resolve(true);
                } else {
                    reject("Не удалось подтвердить операцию. Повторите попытку.");
                }
            }, Math.random() * 500);
        });
    }

    //Установка барьера. Доступ к данным балансов пользователей будет закрыт, пока все три опереции не выполнят свою работу.
    try {
        //Проверка баланса
        await checkBalance();

        //Проверка перевода получателю
        await transferAcception(state);

        //Проверка подтверждения платежа
        await confirmTransaction(state);

        //Произведение платежа
        fromAccount.balance -= amount;
        toAccount.balance += amount;

        console.log("Операция прошла успешно.\n");
        console.log(`Конечный баланс отправителя: ${fromAccount.balance}`);
        console.log(`Конечный баланс получателя: ${toAccount.balance}`);
    } catch (error) {
        //Обработка ошибки
        console.log(`Ошибка: ${error}.`);
    }
}

//Пример без использования барьера:
function transactionWithoutUsingBarrier(fromAccount, amount, toAccount) {
    let serverRespond = Math.random() > 0.5; //Иммитация стабильности работы сервера
    let payeeRespond = Math.random() > 0.5; //Иммитация успеха/неудачи зачисления средств на баланс получателя

    function checkBalance() {
        setTimeout(() => {
            if (fromAccount.balance < amount) {
                console.log("Не достаточно средств.\n");
            }
        }, Math.random() * 500);
    }

    function transferAcception(state) {
        setTimeout(() => {
            if (state) {
                toAccount.balance += amount;
            } else {
                console.log("Не удалось перевести средства. Повторите попытку.\n");
            }
        }, Math.random() * 500);
    }

    function confirmTransaction(state) {
        setTimeout(() => {
            if (state) {
            } else {
                console.log("Не удалось подтвердить операцию. Повторите попытку.\n");
            }
        }, Math.random() * 500);
    }

    // Барьер не установлен
    checkBalance();
    transferAcception(payeeRespond);
    confirmTransaction(serverRespond);

    setTimeout(() => {
        fromAccount.balance -= amount;
        console.log(`Конечный баланс отправителя: ${fromAccount.balance}`);
        console.log(`Конечный баланс получателя: ${toAccount.balance}`);
    }, 1000);
}

// transactionByUsingBarrier(client1, 9000, client2);
transactionWithoutUsingBarrier(client1, 9000, client2);// 



