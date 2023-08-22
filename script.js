"use strict";

const inputBill = document.getElementById("inputBill");
const inputPeople = document.getElementById("inputPeople");
const inputCustomTip = document.getElementById("customTip");

const buttonTip = document.querySelectorAll(".button-tip");
const buttonReset = document.querySelector(".btn-reset");

const labelTipAmount = document.getElementById("tipAmount");
const labelTipTotal = document.getElementById("tipTotal");

const labelErrorPeole = document.getElementById("errorPeople");
const labelErrorBill = document.getElementById("errorBill");

const checkInput = function () {
  if (isNaN(inputBill.value)) {
    labelErrorBill.textContent = "Bill should be a number";
    inputBill.classList.add("error");
    console.log("value can not be a string");
  } else {
    labelErrorBill.textContent = "";
    inputBill.classList.remove("error");
  }
};

const results = function (value) {
  if (inputPeople.value === "0" || inputPeople.value === "") {
    // Display error message
    labelErrorPeole.textContent = "Can’t be zero";
    inputPeople.classList.add("error");
  } else {
    // Remove error message
    inputPeople.classList.remove("error");
    labelErrorPeole.textContent = "";

    const tipAmount = (inputBill.value * value) / 100 / inputPeople.value;
    const totalTip = tipAmount + inputBill.value / inputPeople.value;

    labelTipAmount.textContent = `${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tipAmount)}`;
    labelTipTotal.textContent = `${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalTip)}`;
  }
};

let ButtonValue;

buttonTip.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    buttonTip.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    button.classList.add("active");
    inputCustomTip.value = "";

    const buttonTipValue = button.getAttribute("data-tip");
    ButtonValue = buttonTipValue;
    results(buttonTipValue);
  });
});

inputBill.addEventListener("blur", function () {
  buttonTip.forEach((button) => {
    if (button.classList.contains("active")) {
      results(ButtonValue);
      checkInput();
    } else {
      // console.log("no button contains active class");
    }
  });
});

inputPeople.addEventListener("blur", function () {
  buttonTip.forEach((button) => {
    if (button.classList.contains("active")) {
      // Perform your action for each button with the active class
      // console.log("Button with active class:", button.id);
      results(ButtonValue);
    } else {
      // console.log("no button contains active class");
    }
  });
});

buttonReset.addEventListener("click", function () {
  inputBill.value = "";
  inputPeople.value = "";
  buttonTip.forEach((btn) => {
    btn.classList.remove("active");
  });
  labelTipAmount.textContent = "$00.00";
  labelTipTotal.textContent = "$00.00";
  labelErrorBill.textContent = "";
  labelErrorPeole.textContent = "";
  inputCustomTip.value = "";
});

inputCustomTip.addEventListener("blur", function () {
  ButtonValue = inputCustomTip.value;
  results(inputCustomTip.value);
  buttonTip.forEach((btn) => {
    btn.classList.remove("active");
  });
});
