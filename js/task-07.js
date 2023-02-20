const inputRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRef.addEventListener('input', changeTextSizeHandler);

function changeTextSizeHandler () {
const textSize = inputRef.value;
text.style.fontSize = `${textSize}px`;
}