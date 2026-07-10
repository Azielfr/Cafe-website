// Datatype in Js
/* 1. Primary Data Types
a. number
b. string
c. bigint
d.undefined
e.null
f. boolean
g. symbol
*/

/*Reference datatypes 
1. Object
2. Array
3. Function
*/

let norwayGoal =2;
console.log(norwayGoal, typeof norwayGoal);
let pi =3.14;
console.log(pi);

// string- anything enclosed by ''(single quote),""double(quote)
let collage="LBEF";
let collagefullform=`
L - Lord
B - Buddha
E - Engineering
F - Faculty
`;

console.log(collage,typeof collage);
console.log(collagefullform,typeof collagefullform);
// Right - represent numbers with big value, n at the end of the number.

let lightSpeed = 3000000000;
console.log(lightSpeed, typeof lightSpeed)

// Undefined - only declaration not value assignment
let prosperity;
console.log(prosperity, typeof prosperity);

// Null - null value is assigned to variable.
let width = null;
console.log(wealth, typeof wealth);

// boolean - returns value on true or false.

let isStudent = true;
let isPlayer = false;
console.log(isStudent,typeof isStudent);

// Symbol - store unique value, used to generate object key.
let id = Symbol(1101);
console.log (id, typeof id);

//Non binary type:
//Object - store value in key value pair.
let playerInfo ={
    name : "Halaand",
    country : "Norway",
    internationalgoals : 62,
    club: "M city"
};
console.log(playerInfo, typeof playerInfo);

// array - collection type
const season = ["summer", "monsoon","Autum", "winter", "spring"];
console.log(season, typeof season);

// Function - resuable block of code.
function worldCupWinner(){
    console.log("Aus w T20 Cricket Team Won the World Cup against Eng W Team");
}
worldCupWinner()
console.log(typeof worldCupWinner);

