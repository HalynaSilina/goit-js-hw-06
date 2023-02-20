const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', nameInputHandler);

function nameInputHandler() {
  nameOutput.textContent = nameInput.value.trim();
}
