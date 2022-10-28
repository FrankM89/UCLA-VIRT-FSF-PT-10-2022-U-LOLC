var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add event listener to increment button

//incrementEl.addEventListener("click", function () {
 // if (countEl === 0) {
 //   countEl = "increment++";
 //   container.setAttribute("id", "increment");
//  } else {
//    countEl != 0;
//    countEl = "decrement--";
//    container.setAttribute("id", "decrement");
//  }
//});

// TODO: Add event listener to decrement button


incrementEl.addEventListener("click", function() {
  count++
  setCounterText()
})

decrementEl.addEventListener("click", function() {
  if(count < 0) {
    clearInterval;
  }
  count--
  setCounterText()
})