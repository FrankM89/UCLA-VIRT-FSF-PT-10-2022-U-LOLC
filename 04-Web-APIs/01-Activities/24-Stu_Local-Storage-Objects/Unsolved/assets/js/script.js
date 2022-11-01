var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  
  var form = {
    firstNameInput: firstNameInput.value,
    lastNameInput: lastNameInput.value,
    emailInput: emailInput.value,
    passwordInput: passwordInput.value
  };

  // TODO: Set new submission to local storage 
  
  localStorage.setItem("form", JSON.stringify(form));
});





// .trim() removes spaces in username/passowrd or anything in text box