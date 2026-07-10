//object in Js
//collection type - key:value pair

let institute ={
    name:'LBEF',
    country: 'Nepal',
    type: 'Education',
    uni: 'APU IT'
};
//Access:
//1. dot notation
console.log(institute.name,institute.country, institute.uni);
//2. bracket notation
console.log(institute['name'], institute['country']);

//add item
institute.city = 'ktm';
console.log(institute);
//update item
institute.type = 'Collage';
console.log(institute);
//remove item
delete institute.country;
console.log(institute);