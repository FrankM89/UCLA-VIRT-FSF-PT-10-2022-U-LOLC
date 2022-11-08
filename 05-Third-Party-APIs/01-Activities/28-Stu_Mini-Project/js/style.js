var buttonEl = document.getElementById("button");

var now = dayjs().format("MMM D, YYYY h:mm:ss a");
$("header").text(now);

timerInterval = setInterval(function () {
  var now = dayjs().format("MMM D, YYYY h:mm:ss a");
  $("header").text(now);
}, 1000);

buttonEl.addEventListener("click", function (event) {
  event.preventDefault();
});
