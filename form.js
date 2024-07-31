const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");
const validate = document.querySelector(".email-validate");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const submit = document.querySelector('button[type="submit"]');
// console.log(firstName)
submit.addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;

  if (firstName.value.trim() === "") {
    document.querySelector(".firstname-error").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".firstname-error").style.display = "none";
  }

  if (lastName.value.trim() === "") {
    document.querySelector(".lastname-error").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".lastname-error").style.display = "none";
  }

  if (email.value.trim() === "") {
    document.querySelector(".email-error").style.display = "block";
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    document.querySelector(".email-validation").style.display = "block";
    document.querySelector(".email-error").style.display = "none";
    isValid = false;
  }else {
    document.querySelector(".email-error").style.display = "none";
    document.querySelector(".email-validation").style.display = "none";
  }

  if (!document.querySelector('input[name="radio"]:checked')) {
    document.querySelector(".query-error").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".query-error").style.display = "none";
  }

  if (message.value.trim() === "") {
    document.querySelector(".message-error").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".message-error").style.display = "none";
  }

  if (!checkbox.checked) {
    document.querySelector(".checkbox-error").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".checkbox-error").style.display = "none";
  }

  if (isValid) {
    // document.querySelector(".success").style.display = "block";
    // document.querySelector(".error").style.display = "none";
    document.querySelector(".form-container").style.marginTop="100px"
    alert("Form submitted successfully!");
  } else {
    // document.querySelector(".success").style.display = "none";
    // document.querySelector(".error").style.display = "block";
document.querySelector(".form-container").style.marginTop="10px";
  }
});
