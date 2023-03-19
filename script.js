"use strict";

const billInput = document.querySelector(".bill-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const peopleInput = document.querySelector(".people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");

let bill = 0;
let people = 0;
let tip = 0;

tipBtns.forEach((tipBtn) =>
  tipBtn.addEventListener("click", () => {
    tip = parseInt(tipBtn.textContent.replace("%", "")) * 0.01;
    console.log(tip);
  })
);

peopleInput.addEventListener("input", () => {
  if (tip === 0) {
    alert("Please select the tip");
  } else {
    people = parseInt(peopleInput.value);
    bill = parseInt(billInput.value);
    tipAmount.textContent = (bill * tip) / people;
  }
});
