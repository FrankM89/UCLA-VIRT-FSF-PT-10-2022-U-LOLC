// Rock, Paper, Scissor game :o

var wins = 0;
var ties = 0;
var losses = 0;

// Figure out the user's choice
var choice = prompt("Enter R, P or S");

// Figure out the computer's choice
var choices = ["R", "P", "S"];
var Index = Math.floor(Math.random() * choices.length);

var computerChoice = choices[Index];


if (userChoice === "R" && computerChoice === "S") {
    alert("You win!");
} else if(userChoice === "R" && computerChoice === "P") {
    alert("You lose!");
};

if (userChoice === "S" && computerChoice === "P") {
    alert("You win!");
} else if()