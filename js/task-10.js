const inputRef = document.querySelector('#controls input');
const createDtnRef = document.querySelector('[data-create]');
const destroyDtnRef = document.querySelector('[data-destroy]');
const divRef = document.querySelector('div#boxes');

console.log(inputRef)
function getRandomHexColor() {
  return divRef.style.background = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
createDtnRef.addEventListener('click', getRandomHexColor);

function createBoxes(amount) {
  return event = amount.currentTarget.value;
  const listItem = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = 'he';
  element.classList.add('item')
  listEl.append(element);
});
  
}
inputRef.addEventListener("input", createBoxes); 
    
  