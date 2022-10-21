// WRITE YOUR CODE HERE
var name = "Todd";



var names = ["Todd", "Loraine", "Steve", "Kyle"];


console.log("Welcome to the class " + names);

console.log("Welcome to the class " + names[0]);

console.log("Welcome to the class " + names[1]);

console.log("Welcome to the class " + names[2]);

console.log("Welcome to the class " + names[3]);

names[0] = "Bob";

console.log(names[0]);

console.log(names.length);

if (names[0] != "Todd") {
    console.log("Welcome to the class " + names[0]);
}




//  Array index always starts with 0. Always.