"use strict";

// Login Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const email = document.querySelector("#inputEmail");
const password = document.querySelector("#inputPassword");
const emailError = document.querySelector(".sign--mail");
const passwordError = document.querySelector(".sign--pswd");
const signinBtn = document.querySelector(".signin-btn");
console.log(btnsOpenModal);

const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Don't use closeModal() as it'll call it immediately
//but we want it to be executed on click
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log("A key was pressed", e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// Login Validation
signinBtn.addEventListener("click", function () {
  let noError = 1;
  if (email.value === "") {
    noError = 0;
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }
  if (password.value === "") {
    noError = 0;
    passwordError.classList.remove("hidden");
  } else {
    passwordError.classList.add("hidden");
  }
  if (noError) {
    email.value = "";
    password.value = "";
    closeModal();
  }
});
