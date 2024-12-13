//Functions that have access to the outer function's scope even after the outer function has finished execuing. They are useful for encapsulating private data.

function outerFunc(outerVar) {
    /**
     * closure function
     */
    return function innerFunc(innerVar) {
        console.log("outerVar: ", outerVar)
        console.log("innerVar: ", innerVar)
    }
}

const myFunc = outerFunc("outside");
myFunc("inside");

function funcFactory(funcName) {
    function getFunc() {
        return funcName;
    }

    return { getFunc }; //encapsulating private data 
}

const func = funcFactory('Alert');
console.log(func.getFunc());