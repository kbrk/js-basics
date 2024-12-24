// Destructing assignment is a JS expression that unpacks an object properties into variables.

const obj = {
    a: 'objA',
    b: "objB",
    c: "objC",
    d: "objD",
    e: "objE",
    f: "objF"
}

const arr = ["arrA", "arrB", "arrC", "arrD", "arrE"];

let { a, b, c, d = 'D', ...rest } = obj;
let [arrA, arrB, arrC, ...arrRest] = arr;

console.log(a, b, c, d, rest);
console.log(arrA, arrB, arrC, arrRest);