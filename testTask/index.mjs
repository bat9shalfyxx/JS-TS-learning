// const testCasesArray = [
//     {
//         store: [{ size: 2, quantity: 1 }],
//         order: [{ id: 102, size: [1, 2], masterSize: "s1" }],
//         isPossible: true,
//         mismatches: 1,
//     },
//     {
//         store: [{ size: 3, quantity: 1 }],
//         order: [{ id: 102, size: [1, 2], masterSize: "s1" }],
//         isPossible: false,
//         mismatches: 0,
//     },
//     {
//         store: [{ size: 2, quantity: 4 }],
//         order: [
//             { id: 101, size: [2] },
//             { id: 102, size: [1, 2], masterSize: "s2" },
//         ],
//         isPossible: true,
//         mismatches: 0,
//     },
//     {
//         store: [
//             { size: 1, quantity: 1 },
//             { size: 2, quantity: 2 },
//             { size: 3, quantity: 1 },
//         ],
//         order: [
//             { id: 100, size: [1] },
//             { id: 101, size: [2] },
//             { id: 102, size: [2, 3], masterSize: "s1" },
//             { id: 103, size: [1, 2], masterSize: "s2" },
//         ],
//         isPossible: true,
//         mismatches: 1,
//     },
// ];

const testCasesArray = [
    {
        store: [{ size: 2, quantity: 1 }],
        order: [{ id: 102, size: [1, 2], masterSize: "s1" }],
        isPossible: true,
        stats: [{ size: 2, quantity: 1 }],
        assignment: [{ id: 102, size: 2 }],
        mismatches: 1,
    },
    {
        store: [{ size: 3, quantity: 1 }],
        order: [{ id: 102, size: [1, 2], masterSize: "s1" }],
        isPossible: false,
        stats: [],
        assignment: [],
        mismatches: 0,
    },
    {
        store: [{ size: 2, quantity: 4 }],
        order: [
            { id: 101, size: [2] },
            { id: 102, size: [1, 2], masterSize: "s2" },
        ],
        isPossible: true,
        stats: [{ size: 2, quantity: 2 }],
        assignment: [
            { id: 101, size: 2 },
            { id: 102, size: 2 },
        ],
        mismatches: 0,
    },
    {
        store: [
            { size: 1, quantity: 1 },
            { size: 2, quantity: 2 },
            { size: 3, quantity: 1 },
        ],
        order: [
            { id: 100, size: [1] },
            { id: 101, size: [2] },
            { id: 102, size: [2, 3], masterSize: "s1" },
            { id: 103, size: [1, 2], masterSize: "s2" },
        ],
        isPossible: true,
        stats: [
            { size: 1, quantity: 1 },
            { size: 2, quantity: 2 },
        ],
        assignment: [
            { id: 100, size: 1 },
            { id: 101, size: 2 },
            { id: 102, size: 2 },
        ],
        mismatches: 1,
    },
    {
        store: [
            { size: 1, quantity: 2 },
            { size: 2, quantity: 1 },
        ],
        order: [
            { id: 101, size: [1, 2], masterSize: "s1" },
            { id: 102, size: [1, 2], masterSize: "s2" },
            { id: 103, size: [1] },
        ],
        isPossible: true,
        stats: [
            { size: 1, quantity: 2 },
            { size: 2, quantity: 1 },
        ],
        assignment: [
            { id: 101, size: 1 },
            { id: 102, size: 2 },
            { id: 103, size: 1 },
        ],
        mismatches: 0,
    },
    {
        store: [{ size: 1, quantity: 1 }],
        order: [
            { id: 101, size: [1, 2], masterSize: "s1" },
            { id: 102, size: [1, 2], masterSize: "s2" },
        ],
        isPossible: false,
        stats: [],
        assignment: [],
        mismatches: 0,
    },
    {
        store: [
            { size: 1, quantity: 1 },
            { size: 2, quantity: 1 },
        ],
        order: [
            { id: 101, size: [1] },
            { id: 102, size: [2] },
            { id: 103, size: [1] }, // Заказ, который не может быть выполнен
        ],
        isPossible: false,
        stats: [],
        assignment: [],
        mismatches: 0,
    },
    {
        store: [],
        order: [{ id: 101, size: [1] }],
        isPossible: false,
        stats: [],
        assignment: [],
        mismatches: 0,
    },
    {
        store: [{ size: 1, quantity: 1 }],
        order: [],
        isPossible: true, // Все заказы могут быть выполнены (их просто нет)
        stats: [],
        assignment: [],
        mismatches: 0,
    },
    {
        store: [
            { size: 1, quantity: 2 },
            { size: 2, quantity: 1 },
            { size: 3, quantity: 1 },
        ],
        order: [
            { id: 101, size: [1, 3], masterSize: "s1" },
            { id: 102, size: [2] },
            { id: 103, size: [1] },
        ],
        isPossible: true,
        stats: [
            { size: 1, quantity: 2 },
            { size: 2, quantity: 1 },
        ],
        assignment: [
            { id: 101, size: 1 },
            { id: 102, size: 2 },
            { id: 103, size: 1 },
        ],
        mismatches: 0,
    },
    {
        store: [
            { size: 1, quantity: 1 },
            { size: 2, quantity: 2 },
        ],
        order: [
            { id: 101, size: [2] },
            { id: 102, size: [1, 2], masterSize: "s2" },
            { id: 103, size: [2] },
        ],
        isPossible: true,
        stats: [
            { size: 1, quantity: 1 },
            { size: 2, quantity: 2 },
        ],
        assignment: [
            { id: 101, size: 2 },
            { id: 102, size: 2 },
            { id: 103, size: 1 },
        ],
        mismatches: 0,
    },
    {
        store: [
            { size: 1, quantity: 1 },
            { size: 2, quantity: 1 },
            { size: 3, quantity: 1 },
        ],
        order: [
            { id: 100, size: [1] },
            { id: 101, size: [2] },
            { id: 102, size: [2, 3], masterSize: "s1" },
            { id: 103, size: [1, 2], masterSize: "s2" },
            { id: 104, size: [3] },
        ],
        isPossible: false, //Не получается выполнить из-за нехватки size:2, несмотря на то, что size: 3 был доступен
        stats: [],
        assignment: [],
        mismatches: 0,
    },
];

module.exports = testCasesArray;
