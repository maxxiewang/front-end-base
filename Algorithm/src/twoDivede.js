let arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];
let arr2 = [
    23, 50, 10, 99, 18, 23, 98, 84, 11, 10, 48, 77, 13, 54, 98, 77, 77, 68,
];

// 二分查找的实现
function rank(key, arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + (high - low) / 2;
        if (arr[mid] > key) {
            high = mid - 1;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
arr2.forEach((item) => {
    if (rank(item, arr) === -1) {
        console.log("...", item);
    }
});
