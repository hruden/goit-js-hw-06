const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.getElementById('ingredients');

// for(const ingredient of ingredients ){
//   const liEl = document.createElement('li')
//   liEl.textContent = ingredient
//   liEl.classList.add('item')
//   ulEl.appendChild(liEl)
// }
const makeLiEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
}) 
ulEl.append(...makeLiEl);

