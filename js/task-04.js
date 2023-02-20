const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrBtn.addEventListener("click", decrBtnClickHandler);
incrBtn.addEventListener("click", incrBtnClickHandler);

function decrBtnClickHandler() {
  const value = Number(counterValue.textContent);
  counterValue.textContent = value - 1;
}
function incrBtnClickHandler() {
  const value = Number(counterValue.textContent);
  counterValue.textContent = value + 1;
}
