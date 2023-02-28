const rangeInput = document.querySelector('input[type="range"]');
const spanEl = document.querySelector("#text");
rangeInput.addEventListener('input', (event) => {
    const value = event.target.value;
    console.log(value);
    spanEl.style.fontSize = `${value}px`;
});