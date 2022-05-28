//Form Submit
let form = document.getElementById("form");

//Input Fields
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateUsername();
});

const validateUsername = () => {
  //Username
  if (username.value.trim() == "") {
    setError(username, "Username Cannot Be Empty");
  } else if (username.value.trim().length < 4) {
    setError(username, "Username Length should be more than 4");
  } else {
    setSuccess(username);
  }
  //Email
  if (email.value.trim() == "") {
    setError(email, "Email Cannot Be Empty");
  } else if (isvalidEmail(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Invalid Email Address");
  }

  //password
  if (password.value.trim() === "") {
    setError(password, "Password Cannot Be Empty");
  } else if (
    password.value.trim().length < 4 ||
    password.value.trim().length > 25
  ) {
    setError(password, "Password min 4 and max 25 characters");
  } else {
    setSuccess(password);
  }

  //confirm password
  if (confirmPassword.value.trim() === "") {
    setError(confirmPassword, "Password Cannot Be Empty");
  } else if (confirmPassword.value !== password.value) {
    setError(confirmPassword, "Password Does Not Match");
  } else {
    setSuccess(confirmPassword);
  }

  //message
  var messageReq = 35;
  var messageLeft = messageReq - message.value.trim().length;
  if (message.value.trim() === "") {
    setError(message, "Message Cannot Be Empty");
  } else if (messageLeft > 0) {
    setError(message, `${messageLeft} More Characters Required`);
  } else {
    setSuccess(message);
  }
};

const isvalidEmail = (email) => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

//Error & Success Message
const setError = (input, message) => {
  let parent = input.parentElement;
  let error = parent.querySelector("small");
  parent.classList.add("error");
  error.textContent = message;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
};

const setSuccess = (input) => {
  const parent = input.parentElement;
  parent.classList.add("success");
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
};
