const handBtnRandom = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return bodyRef.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
handBtnRandom.addEventListener('click', getRandomHexColor);
  

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// console.log(getRandomHexColor());
// handBtnRandom.addEventListener('click', getRandomHexColor);
//   bodyRef.style.background = `${getRandomHexColor()}`;

// Задокументований код не працює, поясніть чому.