"use strict";

const billInput = document.querySelector(".bill-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const customBtn = document.querySelector(".custom-btn");
const peopleInput = document.querySelector(".people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const form = document.querySelector(".main-content");
let tip = 0;

tipBtns.forEach((tipBtn) =>
  tipBtn.addEventListener("click", () => {
    btnReset();
    tipBtn.classList.add("active-btn");
    tip = parseInt(tipBtn.value.replace("%", "")) * 0.01;
  })
);

customBtn.addEventListener("change", () => {
  tip = parseInt(customBtn.value) * 0.01;
  customBtn.value = tip * 100 + "%";
});

const btnReset = function () {
  tipBtns.forEach((tipBtn) => tipBtn.classList.remove("active-btn"));
};

form.addEventListener("change", () => {
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
  const bill = parseFloat(billInput.value);
  tipAmount.innerHTML = `$${((bill * tip) / peopleInput.value).toFixed(2)}`;
  totalAmount.innerHTML = `$${((bill + bill * tip) / peopleInput.value).toFixed(
    2
  )}`;
});

// peopleInput.addEventListener("input", () => {
//   if (tip === 0) {
//     alert("Please select the tip");
//   } else {
//     people = parseInt(peopleInput.value);
//     bill = parseInt(billInput.value);
//     tipAmount.textContent = (bill * tip) / people;
//   }
// });

// customBtn.addEventListener("input", () => {
//   const btnValue = customBtn.value;
//   const bill = parseFloat(billInput.value);
//   const percentage = parseFloat(btnValue) / 100;
//   const tip = (bill * percentage) / peopleInput.value;
//   tipAmount.innerHTML = `$${((bill + tip) / peopleInput.value).toFixed(2)}`;
// });
