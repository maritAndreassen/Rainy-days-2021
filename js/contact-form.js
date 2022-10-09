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
/*
function createHtml() {
  contactFrom.innerHTML = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="../styles/styles.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
  <section class="form-container" id=${contactFrom}>
  <h2>Contact form</h2>
    <form class="contact-form">
      <div>
        <label for="name"
          >Name:
          <input type="text" id=${name} />
        </label>
        <div class="form-error" id=${nameError}>Name is required, please enter your name.</div>
      </div>
      <div>
        <label for="subject"
          >Subject:
          <input type="text" id=${subject} />
        </label>
        <div class="form-error" id=${subjectError}>
          Must have a value with a minimum length of 10
        </div>
      </div>
      <div>
        <label for="email"
          >E-mail:
          <input type="text" id=${email} />
        </label>
        <div class="form-error" id=${emailError}>Please insert a valid e-mail addresse</div>
      </div>
      <input class="submit-button" type="submit" value="Submit" />
    </form>
    <button onclick="location.href='/index.html'">Back to homepage</button>
    </section>
    </body>
    </html>`;
}*/
