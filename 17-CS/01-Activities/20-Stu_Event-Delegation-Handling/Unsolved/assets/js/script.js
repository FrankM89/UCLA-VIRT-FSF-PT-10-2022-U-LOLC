const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// On page load, start the count iterance at 0
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // Increment function called (seperately) on each button element
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
   // Increment the count value (number) by 1 each event
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
   // This element replaces the inner-text with the updated language where count refers back to the count iteration
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// For loop starting at inital for all buttons
// For this button on each click run the clickhandler function
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
