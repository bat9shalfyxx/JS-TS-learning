const array = [13, 1, 4, 9, 2, 5, 3, -10, 0, 12, 44, 121, -2, 14, -4, 9, 5, 19, 282, -55];
let counter = 0;
let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMinEl = i;
        for (let j = i + 1; j < arr.length; j++) {
            counter++;
            if (arr[j] < arr[indexOfMinEl]) {
                indexOfMinEl = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfMinEl];
        arr[indexOfMinEl] = temp;
    }
    return arr;
};
console.log(selectionSort(array));
console.log(selectionSort(counter));
//      node selectionSort
