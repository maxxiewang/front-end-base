console.time("Object");
let arrTest = [
    [0, "A"],
    [1, "B"],
];
for (let index = 0; index < 10 * 10000; index++) {
    arrTest.push([index, index + "J"]);
}
console.timeEnd("Object");
