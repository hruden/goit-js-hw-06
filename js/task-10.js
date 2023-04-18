function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
containerEl : document.getElementById('boxes'),
inputEl : document.getElementById('controls').firstElementChild,
btnCreateEl : document.querySelector('[data-create]'),
btnDestroyEl : document.querySelector('[data-destroy]'),
}
ref.btnCreateEl.addEventListener('click', createBoxes)
ref.btnDestroyEl.addEventListener('click', DestroyBoxes)


function createBoxes (){
  const amound = ref.inputEl.value;
  const min = ref.inputEl.getAttribute('min');
  const max = ref.inputEl.getAttribute('max');
  if ((amound >= min) && (amound <= max)){};
  const arrayDiv = [];
  for (let i = 0; i < amound; i += 1){
    const newDiv = document.createElement('div');
    const newSize = 30 + i * 10;

    newDiv.style.width = newSize + "px";
    newDiv.style.height = newSize + "px";
    newDiv.style.backgroundColor = getRandomHexColor();

    arrayDiv.push(newDiv);
  }
ref.containerEl.append(...arrayDiv);
}
function DestroyBoxes(){
  ref.containerEl.innerHTML = "";
  ref.inputEl.value = "";
}


