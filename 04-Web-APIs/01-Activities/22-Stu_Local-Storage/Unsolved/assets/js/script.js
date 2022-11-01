var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

var email = localStorage.getItem("email");

var password = localStorage.getItem("password");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
}

renderLastRegistered();

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
});
