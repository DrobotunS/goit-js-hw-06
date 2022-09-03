const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
console.log(list);
const element1 = document.createElement("li");
element1.textContent = ingredients[0];
element1.classList.add('item')

const element2 = document.createElement("li");
element2.textContent = ingredients[1];
element2.classList.add('item')

const element3 = document.createElement("li");
element3.textContent = ingredients[2];
element3.classList.add('item')

const element4 = document.createElement("li");
element4.textContent = ingredients[3];
element4.classList.add('item')

const element5 = document.createElement("li");
element5.textContent = ingredients[4];
element5.classList.add('item')

const element6 = document.createElement("li");
element6.textContent = ingredients[ingredients.length - 1];
element6.classList.add('item')

list.append(element1, element2, element3, element4, element5, element6,);