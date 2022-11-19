const numIndicator = document.querySelector(".num");
const capsIndicator = document.querySelector(".caps");
const scrollIndicator = document.querySelector(".scroll");

function changeHover(key) {
  const element = this.document.querySelector(`#${key}`);
  if (element) {
    element.classList.add("active");
    this.setTimeout(() => element.classList.remove("active"), 200);
  }
}

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  const pressedKey = e.key.toLowerCase();
  console.log(pressedKey);
  changeHover(pressedKey);
});

window.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.key.toLowerCase() === "printscreen") {
    changeHover(e.key.toLowerCase());
  }
});
