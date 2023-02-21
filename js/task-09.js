const bodyBackground = document.querySelector('body');
const backgroundColorName = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColorBtnclickHandler);

function changeColorBtnclickHandler() {
  const color = getRandomHexColor();
  bodyBackground.style.backgroundColor = color;
  backgroundColorName.textContent= color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
