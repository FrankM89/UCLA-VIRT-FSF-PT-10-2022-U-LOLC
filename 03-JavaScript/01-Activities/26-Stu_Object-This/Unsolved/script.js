// TODO: What does 'this' refer to?
console.log(this);
   // "this" means it is used globally and will be logged whenever "this" is used
   // inside of the {} for that variable object.


// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }
      // declaring a function that refrences the object window, which means
      // it's a global object.


// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};
   // "this" will log the child's age + 10.
   // giving you 20.
   // "this" being child.

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};
   // "this" will log investor and initial investment * 1.15.
   // "this" being investor

// TODO: After commenting, check your results!
helloThis();
   // object window (?)
   // window object is also the global object, which would be "this"

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
   // the functions are called