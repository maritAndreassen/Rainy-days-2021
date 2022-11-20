const contactFrom = document.getElementById("contactForm");

const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const nameError = document.getElementById("nameError");
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatchers = regEx.test(email);
  return patternMatchers;
}

form.addEventListener("submit", validateForm);

function openForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}
