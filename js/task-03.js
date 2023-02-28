const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryListEl = document.querySelector(".gallery");
console.log(galleryListEl);
const stringItemEls = images.map((image) => `<li class="item-js">
<img class=img-js src=${image.url} alt=${image.alt} width="380">
</li>`).join("");
console.log(stringItemEls);
galleryListEl.insertAdjacentHTML("beforebegin", stringItemEls);

const imgEls = document.querySelectorAll(".img-js");
console.log(imgEls);
const itemEls = document.querySelectorAll('.item-js');
console.log(itemEls);

itemEls.forEach(el => {
  el.style.listStyle = "none";
  el.style.display = "flex";
  el.style.margin = "8px";
  el.style.flexDirection = "column";
});


