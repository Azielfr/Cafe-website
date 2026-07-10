// String - anything enclosed by '' - single quote, ""- double quote and `` backtick
let team= "Portugal";
let fan =`
sad
very sad
very very sad
`;
console.log(team);
console.log(fan);
// length
console.log(team.length);
// Check subtring - Includes()
console.log(team.includes("Port"));
// Concatenation
let firstname= "Donald";
let lastname = "Trump";
let fullname = firstname + " " + lastname;
console.log(fullname);

// replace() - replace substring in the given string
// syntax - str.replace(old_substring, NewString)
console.log(fullname.replace("Trump", "Duck"));