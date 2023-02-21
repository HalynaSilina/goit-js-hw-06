const amountInput = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxesBtnClickHandler);
destroyBtn.addEventListener("click", destroyBoxesBtnClickHandler);

function createBoxesBtnClickHandler() {
  const amount = Number(amountInput.value);
  const newBoxes = createBoxes(amount);
  boxesRef.append(...newBoxes);
}
function destroyBoxesBtnClickHandler() {
  destroyBoxes();
  amountInput.value = "";
}
function createBoxes(amount) {
  const boxes = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    console.log(box);
    boxes.push(box);
    width += 10;
    height += 10;
  }
  return boxes;
}
function destroyBoxes() {
  boxesRef.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
