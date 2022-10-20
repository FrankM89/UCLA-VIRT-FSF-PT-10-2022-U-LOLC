var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a !== b);
console.log(b == e);
console.log(c > b);
console.log(d >= 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2);
console.log(expression1 || expression2);



console.log(typeof NaN);

// NaN means "Not a Number"






  
// == means is it equal to (doesn't matter if it's a string or a number)
// != means not equal to
// === checks if they have same value and datatype (number to numner or string to string)
// !== checks whether its two operands are not equal, returning a true/false
// && both sides have to be true or it comes out false
// || (AKA or evaluator) returns true, only if one of the two expressions are true
// ! turns an expression that evaluates to true or false and vice-versa (sflips true to false and false to true)
