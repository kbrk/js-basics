// Regular functions get arguments by default.
const regfunc1 = function () {
    console.log(arguments);
}

regfunc1(); // returns Arguments(0)
regfunc1(1,2,'Message', [1,2,'hi'], {p1: 1, p2: 2, p3: 'hi'}); // returns Arguments(5)

// Arrow functions don't get arguments by default.
const arrowfunc1 = () => {
    console.log(arguments);
}

arrowfunc1(); // Uncaught ReferenceError: arguments is not defined
arrowfunc1(1, 2, 'Message', [1, 2, 'hi'], { p1: 1, p2: 2, p3: 'hi' }); // Uncaught ReferenceError: arguments is not defined

// this is an anonymous function and also a constructor function
function AnonymConstructor(name) {
    this.name = name;
}

const anonym = new AnonymConstructor("Anonymous Function");
console.log(anonym); // Anonym {name: 'Anonymous Function'}

const ArrowConstructor = (name) => {
    this.name = name;
}
const arrow = new ArrowConstructor("Arrow Function"); //TypeError: ArrowConstructor is not a constructor



// In regular functions of an object or class 'this' represents the object.
// In arrow functions of an object or class 'this' does not represents the object.

const obj = {
    type: 'object',
    regfunc: function(){
        return this;
    },
    arrowfunc: () => {
        return this;
    },
    typeArrow: () => {
        return this.type
    },
    arrowInsideRugular(){
        setTimeout(() => {
            console.log(this.type);
        }, 1000);
    }
}
console.log(obj); // {type: 'object', regfunc: ƒ, arrowfunc: ƒ}, the obj object.
console.log(obj.regfunc()); //{type: 'object', regfunc: ƒ, arrowfunc: ƒ}, the obj object.
console.log(obj === obj.regfunc()); // true
console.log(obj.arrowfunc()); // {}, in a browser, it is going to be the Window object. 
obj.arrowInsideRugular(); // object



// In event handlers the 'this' in a regular function represents the object of the event.  
// In event handlers the 'this' in an arrow function represents the Window object.  

document.body.addEventListener('click', function(){console.log(this);}); // After the body click event on a browser, it types the <body> object.
document.body.addEventListener('click', () => {console.log(this);}); // After the body click event on a browser, it types the Window object.