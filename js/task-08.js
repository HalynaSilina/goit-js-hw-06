const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
   return window.alert("You need to fill in all fields");
  }
  const formData = {
    userEmail: email,
    userPassword: password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
