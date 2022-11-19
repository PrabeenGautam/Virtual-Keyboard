const numIndicator = document.querySelector(".num");
const capsIndicator = document.querySelector(".caps");
const scrollIndicator = document.querySelector(".scroll");

const numbers = [
  { click: "backquote", active: "tilde" },
  { click: "digit1", active: "left-one" },
  { click: "digit2", active: "left-two" },
  { click: "digit3", active: "left-three" },
  { click: "digit4", active: "left-four" },
  { click: "digit5", active: "left-five" },
];

function changeHover(key) {
  const element = this.document.querySelector(`#${key}`);
  if (element) element.classList.add("active");
}

function removeStyle(key) {
  const element = this.document.querySelector(`#${key}`);
  if (element.classList.contains("active")) element.classList.remove("active");
}

function activateLock(event, element) {
  const getActivateState = event.getModifierState(event.key);
  element.closest(".den").classList.toggle("active", getActivateState);
}

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  const pressedKey = e.code.toLowerCase();
  if (pressedKey === "scrolllock") activateLock(e, scrollIndicator);
  if (pressedKey === "capslock") activateLock(e, capsIndicator);
  if (pressedKey === "numlock") activateLock(e, numIndicator);
  if (pressedKey === "audiovolumeup") {
    changeHover("arrowup");
    changeHover("fn");
    return;
  }
  if (pressedKey === "audiovolumedown") {
    changeHover("arrowdown");
    changeHover("fn");
    return;
  }
  if (pressedKey === "insert") {
    changeHover("insert");
    changeHover("fn");
    return;
  }
  changeHover(pressedKey);
});

window.addEventListener("keyup", function (e) {
  e.preventDefault();
  const pressedKey = e.code.toLowerCase();
  if (pressedKey === "printscreen") {
    changeHover(e.key.toLowerCase());
  }
  removeStyle(pressedKey);
});
