const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", inputBlurValidationHandler);

function inputBlurValidationHandler() {
  if (inputRef.value.trim().length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
