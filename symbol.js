/**
 * Symbol is a unique, immutable and not convertible value that can be used to create unique identifiers for objects.
 * Guaranteed to be unique.
 */
const cache = new Map();
const key = Symbol('myKey');
cache.set(key, 'Hello World');
console.log(cache.get(key), key); // Output: "Hello World"