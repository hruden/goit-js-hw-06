const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.getElementById('ingredients')

for(const ingredient of ingredients ){
  const liEl = document.createElement('li')
  liEl.textContent = ingredient
  liEl.classList.add('item')
  ulEl.appendChild(liEl)
}