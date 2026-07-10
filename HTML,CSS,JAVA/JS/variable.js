//variable in js.
// Variable Declarations
/*
1. var
2. let
3. const
*/

// var - can redeclare and reassign
var goat = "Ronaldo";
console.log(goat);
var goat = "Messi";
console.log(goat)
goat = "Neymar";
console.log(goat);

// let - Block scope, reassign, cannot redeclare
let country = "Germany";
console.log(country);
country = "Nepal";
console.log(country);
// let country = "India" - Error cannot redeclare

// const - block scope. cannot reassign and redeclare
const pi = 3.14;
console.log(pi);
// pi = 22/7; - cannot reassign
// const pi = 22/7 - cannot reassign

//rules for defining variables
/*
1. Character(A-Z , a-z), Number (0-9) and Special Character ("_","$") are valid.
2. Case-sensitive
3. Must not start with digits.
4. Avoid whitespace
5. Donot use reserve keywords
*/