const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const markup = ingredients.map(el => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  itemEl.classList.add("item");
  return itemEl;
});
list.append(...markup);