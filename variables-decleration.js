/**
 * var: Function scoped decleration. Can be re-declared and re-assigned.
 */

var a = 5;

function funcVar() {
    a = 6; //reassignment
    console.log(a);

    var a = true; //redecleration
    console.log(a);
}

//funcVar();

/**
 * let: Block scoped decleration. Cannot be re-declared. Can be re-assigned.
 */
let b = 2;
function funcLet() {
    try {
        console.log(b);
        b = 4; //reassignment
        console.log(b);
        let b = 44; // cannot be redeclared
    } catch (e) {
        if (!(e instanceof Error)) {
            e = new Error(e);
        }
        console.error(e.message);
    }
}

funcLet();

const c = 123;

/**
 * let: Block scoped decleration. Cannot be re-declared and re-assigned.
 */
function funcConst() {
    try {
        // console.log(c); // Cannot access 'c' before initialization
        const d = 22;
        d = 44; //cannot be reassigned
        //const d = 11; //cannot be redeclared
    } catch (e) {
        if (!(e instanceof Error)) {
            e = new Error(e);
        }
        console.error(e.message);
    }
}

funcConst();