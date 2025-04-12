let companies = `[
    {
        "name": "Газпром",
        "numberOfEmployees": 100000,
        "rating": 0.2
    },
    {
        "name": "VK",
        "numberOfEmployees": 328190,
        "rating": 0.001
    }
]`;
console.log(JSON.parse(companies));
console.log(JSON.parse(companies)[0]);
console.log(JSON.parse(companies)[1].rating);
