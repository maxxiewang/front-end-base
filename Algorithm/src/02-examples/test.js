let arr = [1, 2, 3, 4];
let arr2 = [[5, 6], 7];
// let res1 = arr.push(arr2);
// console.log("--1--", res1); // [1,2,3,4,[[5,6],7]]
// console.log("--arr--", arr);
console.log("--2--", arr.concat(arr2)); // [1,2,3,4,[5,6],7]
console.log("--3--", arr);
