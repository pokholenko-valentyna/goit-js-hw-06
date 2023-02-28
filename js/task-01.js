const categoriesEl = document.querySelector("#categories");
const itemsCategoriesEl = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemsCategoriesEl.length}`);

const categories = itemsCategoriesEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const listEl = element.lastElementChild.children;
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${listEl.length}`);
})