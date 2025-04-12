const array = [-55, 13, 282, 1, 4, 9, 2, 5, 3, -10, 0, 12, 44, 121, -2, 14, -4, 9, 5, 19];
let count = 0;
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (i === pivotIndex) {
            continue;
        }
        if (pivot < arr[i]) {
            greater.push(arr[i]);
        } else {
            less.push(arr[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
};
console.log(quickSort(array));
console.log(count);
//        node quickSort
