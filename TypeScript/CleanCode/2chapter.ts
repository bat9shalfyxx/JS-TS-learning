/////////////////////Содержательные имена:
///////////Избегай дезинформации
class List extends Array {
    ///Your implementation
}
type USER = {
    id: number;
    name: string;
};
//Wrong naming
const usserList: USER[] = [
    {
        id: 1,
        name: "Sanya",
    },
    {
        id: 2,
        name: "Egorych",
    },
];
//Correct naming
const arrayOfUsers: USER[] = [
    {
        id: 1,
        name: "Sanya",
    },
    {
        id: 2,
        name: "Egorych",
    },
];
