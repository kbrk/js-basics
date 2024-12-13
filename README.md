# What is JavaScript 

Javascript is a high level, interpreted cross-platform programming language. It is used primarily for to create dynamic and interactive web pages. Can be integrated frontend and backend (NodeJS)

## Compiled Laguages

Compiled languages are converted directly converted into machine code (from source code to object code) that the processor can execute. C, C++, C#

## Interpreted Languages

Interpreted Languages are execute the code directly and line by line by an interpreter. The code does not need to be complied. JavaScript(V8 by google & SpiderMonkey by Mozilla ), PHP(zend engine), Python (CPython)

## Data types in JS

string, number, boolean, null, undefined, and symbol

Symbol is a unique, immutable and not convertible value that can be used to create unique identifiers for objects.

## Scope or Variable Scope

Visibility of a variable.

## Closures

Functions that have access to the outer function's scope even after the outer function has finished execuing. They are useful for encapsulating private data.


## Event Loop

A mechanism that allows JS handle asyncronous operations like setTimeout or fetching data without a service interruption. To do this, JS puts a callback function in a queue for every event.

### Call Stack

When a function is called it is added to a Call Stack and when the function is done it is removed from the stack.

### WebAPI

Set of functionalities for web browsers or web servers such as timer, fetcha api, ui events, DOM manupilations, push notification, web sockets and so on.

### Task Queue 

Stores callbacks for asynchronous operations that are ready to be executed. The callbacks are sent to the call stack using the FIFO principle.

