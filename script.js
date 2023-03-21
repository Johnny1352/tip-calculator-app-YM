"use strict";

const billInput = document.querySelector(".bill-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const customBtn = document.querySelector(".custom-btn");
const peopleInput = document.querySelector(".people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset-btn");
const form = document.querySelector(".main-content");
let tip = 0;

form.addEventListener("input", () => {
  calculateResults();
});

tipBtns.forEach((tipBtn) =>
  tipBtn.addEventListener("click", () => {
    // btnReset();
    customBtn.value = "";
    if (tipBtn.checked === true) {
      tipBtn.classList.add("active-btn");
      tip = parseInt(tipBtn.value.replace("%", "")) * 0.01;
    }
  })
);

customBtn.addEventListener("change", () => {
  radioReset();
  tip = parseInt(customBtn.value) * 0.01;
  customBtn.value = tip * 100 + "%";
  calculateResults();
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  radioReset();
  tip = 0;
  billInput.value = "";
  peopleInput.value = "";
  tipAmount.innerHTML = `$0.00`;
  totalAmount.innerHTML = `$0.00`;
});

const radioReset = function () {
  tipBtns.forEach((tipBtn) => {
    tip = 0;
    tipBtn.checked = false;
  });
};

const calculateResults = function () {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);
  if (bill > 0 && people > 0 && tip !== undefined) {
    const tipResult = ((bill * tip) / people).toFixed(2);
    const totalResult = ((bill + bill * tip) / people).toFixed(2);
    tipAmount.innerHTML = `$${tipResult}`;
    totalAmount.innerHTML = `$${totalResult}`;
  } else {
    tipAmount.innerHTML = `$0.00`;
    totalAmount.innerHTML = `$0.00`;
  }
};

const checkError = function () {
  if (!billInput.value) {
    billInput.style.border = "solid 1px red";
    tipAmount.innerHTML = `$0.00`;
    totalAmount.innerHTML = `$0.00`;
  } else billInput.style.border = "none";
  if (!peopleInput.value) {
    peopleInput.style.border = "solid 1px red";
    tipAmount.innerHTML = `$0.00`;
    totalAmount.innerHTML = `$0.00`;
  } else peopleInput.style.border = "none";
};
