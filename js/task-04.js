let value = 0;
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
    value -=1;
    counterValue.textContent = value;
});
incrementBtn.addEventListener('click', function () {
    value +=1;
    counterValue.textContent = value;
});


