// Destructing assignment is a JS expression that unpacks an object properties into variables.

// object into variables
const obj = {
    a: 'objA',
    b: "objB",
    c: "objC",
    //d: "objD",
    e: "objE",
    f: "objF"
}
let { a, b, c, d = 'default D', ...rest } = obj;
console.log(a, b, c, d, rest);

// array into variables
const arr = ["arrA", "arrB", "arrC", "arrD", "arrE"];
let [arrA, arrB, arrC, ...arrRest] = arr;
console.log(arrA, arrB, arrC, arrRest);

