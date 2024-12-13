// A function that takes functions as arguments, or returns function as a result.


// Sample1: A basic sample
console.log('Sample1');
function callbackFunction() {
    console.log("Callback function is called.");
}

function hof(func) {
    console.log('HOF is called.');
    func();
}

hof(callbackFunction);

// Sample2: Area and circumeference of rectangles.
console.log('/////////');
console.log('/////////');
console.log('Sample2');

var lengths = [
    { 'w': 1, 'l': 2 },
    { 'w': 2, 'l': 4 },
    { 'w': 5, 'l': 10 }
]

function area(w, l) {
    return w * l;
}

function circumeference(w, l) {
    return 2 * (w + l);
}

function calculate(func, w, l) {
    return func(w, l);
}

for (let i of lengths) {
    console.log('Area:', calculate(area, i["w"], i["l"]));
    console.log('Circumeference:', calculate(circumeference, i["w"], i["l"]));
}


console.log('/////////');
console.log('/////////');
console.log('Sample3: Built in functions. map, reduce, filter, sort');
const arr = [1, 2, 10, 36, 42, 51, 68, 70, 77];

console.log('/////////');
console.log('/////////');
console.log('DESCENDING SORT');
console.log(arr.sort(function (a, b) { return b - a; }));

console.log('/////////');
console.log('/////////');
console.log('MAP');

const outputArrayMap = arr.map((item) => {
    return item * item
});
console.log(outputArrayMap);

console.log('/////////');
console.log('/////////');
console.log('FILTER');


const outputArrayFilter = arr.filter((item) => {
    return item % 10 == 0;
});
console.log(outputArrayFilter);

console.log('/////////');
console.log('/////////');
console.log('REDUCE');

// sum of all numbers
const outputReduce = arr.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue
}, initialValue = 0);
console.log("Sum of all:", outputReduce);

// sum of all even numbers
const outputReduce2 = arr.reduce((previousValue, currentValue, currentIndex) => {
    if (currentValue % 2 == 0) {
        return previousValue + currentValue;
    } else {
        return previousValue;
    }
}, initialValue = 0);
console.log("Sum of all evens:", outputReduce2);

// grouping odd and even numbers
const outputReduce3 = arr.reduce((numberGroup, currentValue, currentIndex) => {
    if (currentValue % 2 == 1) {
        numberGroup['ODD'].push(currentValue);
    } else {
        numberGroup['EVEN'].push(currentValue);
    }
    return numberGroup;
}, initialValue = {
    'ODD': [],
    'EVEN': []
});
console.log("Group of Numbers: ", outputReduce3); 