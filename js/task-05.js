const inputEl = document.querySelector("#name-input");
const titleEl = document.querySelector('h1');
titleEl.classList.add("js-title");
const spanEl = document.querySelector("#name-output");
spanEl.classList.add("js-span");

inputEl.addEventListener('input', (event) => {
    
    if (inputEl.value === '') {
        spanEl.textContent = 'Anonymous';
        return;
    } spanEl.textContent = event.target.value;
})

