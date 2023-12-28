// Define multiple objects and methods
let Tias = {
    name: 'Tias',
    fav_number: 3,
    developer: true
};

let John = {
    name: 'John',
    fav_number: 7,
    developer: false
};

function add(a, b) {
    return a + b;
}

// Export the objects and methods as named exports
module.exports = {
    Tias,
    John,
    add
};

// MODULE WRAPPER FUNCTION ARGUMENTS
console.log("EXPORTS:");
console.log(exports);
console.log("REQUIRE:");
console.log(require);
console.log("MODULE:");
console.log(module);
console.log("FILENAME:");
console.log(__filename);
console.log("DIRNAME:");
console.log(__dirname);
