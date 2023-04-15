function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.getElementById('controls');
const containerEl = document.getElementById('boxes');
const inputEl = divEl.children[0];
const btnCreateEl = divEl.children[1];
const btndestroyEl = divEl.children[2];

btnCreateEl.addEventListener('click', onCreateDiv)
// const array = [];

function onCreateDiv(event){
  // inputEl.value = array.length;
  createBoxes();
}

function createBoxes (amount){
  const newDiv = document.createElement('div');
  containerEl.append(newDiv);
  
}


