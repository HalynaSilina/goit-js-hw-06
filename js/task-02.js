const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map(ingredient => {
  const listElem = document.createElement('li');
  listElem.textContent = ingredient;
  listElem.classList.add("item");
  return listElem;
})

listRef.append(...listOfIngredients);