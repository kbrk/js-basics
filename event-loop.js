/**
 * Event Loop is a mechanism that allows JS handle asyncronous operations like setTimeout or fetching data without a service interruption. To do this, JS puts a callback function in a queue for every event. 
 * Call Stack: When a function is called it is added to a Call Stack and when the function is done it is removed from the stack.
 * WebAPI: Set of functionalities for web browsers or web servers such as timer, fetcha api, ui events, DOM manupilations, push notification, web sockets and so on. 
 * Task Queue: Stores callbacks for asynchronous operations that are ready to be executed. The callbacks are sent to the call stack using the FIFO principle.
 */


function doAsyncProcess(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

function doJob() {
    console.log('Start');
    doAsyncProcess(() => {
        console.log("Asyncronous process is done."); // the call back function.
    });
    console.log('End');
}


/**
 * For this function, the call stack is;
 * [] --> [sayHi] --> [sayHi, console.log] --> [sayHi] --> []  
 */
function sayHi() {
    console.log("Hi");
}

/**
 * Step by step the Call Stack: [] --> [doJob] --> [doJob, console.log('start')] --> [doJob] --> [doJob, doAsyncProcess] --> [doJob, doAsyncProcess, setTimeout] --> (WebAPI [Timer callback]) --> [doJob, console.log('end')] --> [doJob] --> [] --> [sayHi] -->  [sayHi, console.log("Hi")] --> [sayHi] --> [] --> (after 3000 milliseconds from Timer callback set in WebAPI callback is pushed to Task Queue [callback]) --> (The Event Loop checks the Task Queue and the callback is ready to execute) --> [callback] --> []
 */
// doJob();
// sayHi();


//////////////////////////
//////////////////////////
//////////////////////////
// var mockButton = new Object();
// The User click the button the time between timeout2 and timeout1  
// mockButton.addEventListener('click', () => {
//     console.log('Button clicked.');
// });

// console.log('Start');

// setTimeout(() => {
//     console.log('timeout1');
// }, 5000);

// setTimeout(() => {
//     console.log('timeout2');
// }, 500);

// console.log('End');



// // Call Stack  : [addEventListener] -- WebAPI --> [console.log('start')] --> [] --> [setTimeout] -- WebAPI --> [] --> [setTimeout] -- WebAPI --> [] --> [console.log('end')] --> [] --> [timeout2] --> [] --> [click console.log("Button clicked")] --> [] --> [timeout1] --> []

// // WebAPI      : [UI Event click] --> [UI Event click, Timer timeout1 (1000 ms)], [UI Event click, Timer timeout1 (1000 ms), Timer timeout2 (500 ms)] --> [UI Event click, Timer timeout1 (1000 ms)] --> [Timer timeout1 (1000 ms)] --> [] 

// // Task Queue  : [timeout2] --> [] --> [click] --> [timeout1] --> []

// // Output      : Start End timeout2 timeout1


function withMicroTasks() {
    console.log('Start');
    setTimeout(() => {
        console.log('timeout');
    }, 0);

    /**
     * Promises are added a Micro Task Queue and micro task queue has priority over task queue.
     * For example fetch promises. 
     */
    var p = new Promise((resolve, reject) => {
        resolve("resolved");
    })

    p
        .then((value) => console.log(`The promise is ${value}`))
        .then(() => console.log(`The promise is done.`));

    console.log('Stop');
}
debugger
withMicroTasks();