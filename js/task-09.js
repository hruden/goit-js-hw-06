function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor(elem){
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  nameColor.textContent = random;
}
