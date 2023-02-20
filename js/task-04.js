const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrBtn.addEventListener("click", decrBtnClickHandler);
incrBtn.addEventListener("click", incrBtnClickHandler);

let counterValue = 0;

function decrBtnClickHandler() {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
  return counterValue;
}
function incrBtnClickHandler() {
  counterValue = counterValue + 1;
  value.textContent = counterValue + 1;
  return counterValue;
}
