function keydownAction(event) {
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.keycode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
