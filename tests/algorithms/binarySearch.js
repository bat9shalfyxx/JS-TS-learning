const array = [-55, -10, -4, -2, 0, 1, 2, 3, 4, 5, 5, 9, 9, 12, 13, 14, 19, 44, 121, 282];
let count = 0;
let binarySearch = (arr, target) => {
    let right = arr.length - 1;
    let left = 0;
    let middle;
    let found = false;
    let position = -1;
    while (!found && left <= right) {
        count++;
        middle = Math.floor((right + left) / 2);
        if (target === arr[middle]) {
            position = middle;
            found = true;
            return position;
        }
        if (target > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return position;
};
console.log(binarySearch(array, 9));
console.log(count);
//      node binarySearch
