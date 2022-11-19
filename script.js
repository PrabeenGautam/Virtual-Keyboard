window.addEventListener("keydown", function (e) {
  e.preventDefault();
  const pressedKey = e.key.toLowerCase();
  const element = this.document.querySelector(`#${pressedKey}`);
  element.classList.add("active");
  this.setTimeout(() => element.classList.remove("active"), 100);
});
