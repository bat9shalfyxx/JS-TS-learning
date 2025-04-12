const array = [-55, 13, 282, 1, 4, 9, 2, 5, 3, -10, 0, 12, 44, 121, -2, 14, -4, 9, 5, 19];
let count = 0;
let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            count++;
        }
    }
    return arr;
};
console.log(bubbleSort(array));
console.log(count);
//        node bubbleSort
