// Get our elements that we want to work with
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// Renders/shows todos
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Clears the todos list and gets the number of todos in the list
  todoList.innerHTML = ""; 
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // Adds a todo to the list
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// Render the inital list of todos on page load
function init() {
  // TODO: What is the purpose of the following line of code?
  // Gets the todos from localstorage and parses them (opposite of stringify)
  // Converts a string or array into an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // Check if we have any todos and save those to the todos array
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // Calls the function for renderTodos to render the todos
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Sets the value of the pair identified by key to value, creating a new 
  // key/value pair if none existed for key previously.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// Adds an event listener for form submission, story and render the todos
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // A null check to see if we have todo next
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // Add the todo to the todos array and clear the input field
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // Store and render the todos
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// Removes and element when you click "complete"
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // Checks if the clicked the complete button, and removes the todo
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // Store and render the todos
    storeTodos();
    renderTodos();
  }
});

init();




// NEVER use .innerHTML
// ALWAYS use .textContent