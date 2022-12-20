const input1 = process.argv[2];

const input2 = process.argv[3];

console.log(input1 === input2);

console.log(process.argv[2] === process.argv[3]); 
// Both console.log mean the same thing.



if(condition) {
    doOneThing()
} else {
    doSomeOtherThing()
}


condition ? doOneThing() : doSomeOtherThing();

// Top two are also the same thing. Second is just a one-liner.

// EXAMPLE
const isNumberFiveEven = 5 % 2 === 0 ? "" : "";

// const isNumberFiveEven = 5 % 2 === 0 ? true : false;

