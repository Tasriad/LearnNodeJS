// Import the named exports from second.js
const { Tias, John, add } = require("./second");

console.log("Hello World!");

// Access the imported objects and methods
console.log(Tias); // Output the Tias object
console.log(John); // Output the John object

// Use the imported function
const result = add(5, 10);
console.log("Result:", result); // Output: Result: 15
