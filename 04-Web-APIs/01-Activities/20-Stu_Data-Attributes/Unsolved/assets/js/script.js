var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var state = element.getAttribute("data-state");

  if(state === 'hidden') {
    element.setAttribute('data-state', 'visible');
    element.textContent = element.getAttribute('data-number');
  } else {
    element.setAttribute('data-stat', 'hidden');
    element.textContent = ' ';
  }
});
