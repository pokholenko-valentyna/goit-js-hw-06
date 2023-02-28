function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");
buttonEl.addEventListener('click', changeBgColor);
function changeBgColor(event) {
  const bodyEl = document.querySelector("body");
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  const spanEl = document.querySelector(".color");
  spanEl.textContent = `- ${color}`;

}