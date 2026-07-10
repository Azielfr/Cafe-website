// Array in JS - collection type, dynamic size, heterogeneous data
let fruits=['Apple','Banana','Mango','Grapes'];
// Length
console.log(fruits.length);

// Indexing - 
console.log(fruits[0], fruits[1]);

// Change item of an array.
fruits[0]="Litchi";
console.log(fruits)

// Add item in the array
// 1. push() - add item from the end of the array
// 2. unshift() - add item from the start of the array
let WCWinners = ['Germany', 'Brazil', 'Italy'];
console.log(WCWinners);
// push()
WCWinners.push('France');
console.log(WCWinners);
// unshift()
WCWinners.unshift('Argentina');
console.log(WCWinners);
// Remove item from the array
let touristAreaNepal = ['Bangkok','Everest B C','Pokhara','KTM','Pyramid'];
console.log(touristAreaNepal);
// 1. pop() - removes item from the end of the array
touristAreaNepal.pop();
console.log(touristAreaNepal);
// 2. shift() - removes item from start of the array
touristAreaNepal.shift();
console.log(touristAreaNepal);