const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const basicName = nameOutput.textContent;

nameInput.addEventListener("input", nameInputHandler);

function nameInputHandler() {
  if (nameInput.value !== "") {
    return (nameOutput.textContent = nameInput.value.trim());
  }
  nameOutput.textContent = basicName;
}
