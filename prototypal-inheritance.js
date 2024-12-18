/**
 * JS implements inheritance by using objects.
 * When a class is created, JS is create a function with the same name with the class name.   
 */



class Mamals {
    breath() {
        return 'unknown';
    }
}

const human = new Mamals();
human.say = 'Hi';

const cat = new Mamals();
cat.say = 'Meow';


/**
 * breath is the property of the Mamals (prototype) class.
 * say is the property of the human and cat classes
 * 
 * Mamals {say: 'Hi'}
    prototypal-inheritance.js:17
    say ='Hi'
    [[Prototype]] = Object
        breath = ƒ breath() {\r\n        return 'unknown';\r\n    }
        constructor = class Mamals {\r\n    breath() {\r\n        return 'unknown';\r\n    }\r\n}
        [[Prototype]] = Object
            ...
 */

/**
 * Modification of prototypes. Now all mamals can breath by their lungs.
 */
Mamals.prototype.breath = function () {
    return "by Lungs.";
}



function Insects() {
    this.lives = '1 year';
}
Insects.lives = 'up to 50 years';

const ladybug = new Insects();
console.log(ladybug);
console.log(Insects.prototype.lives + " is undefined.");
console.log(`Ladybug still lives ${ladybug.lives} . Because the ladybug is the object of the Insects function.`);



const person = {
    say() {
        return 'Hi';
    },
    make() {
        return 'Inventions'
    }
}
const she = {};
Object.setPrototypeOf(she, person);
console.log(she.say());

const he = {
    say() {
        return 'Hi, hello.';
    },
    __proto__: person
}

console.log(he.say(), he.make()); 
// say is an own property on he.
// make is not an own property on he but it is on person (the prototype).
// JS looks for the given property in all nested prototypes.  
