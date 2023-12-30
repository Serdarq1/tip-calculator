const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".tip-total");
const btn = document.querySelector(".btn");
const fivePer = document.querySelector(".tip5");
const tenPer = document.querySelector(".tip10");
const fifteenPer = document.querySelector(".tip15");
const twentyFivePer = document.querySelector(".tip25");
const fiftyPer = document.querySelector(".tip50");
const tipInput = document.querySelector(".tip-input");
const billInput = document.querySelector(".bill-input");
const numInput = document.querySelector(".num-input");

function calculateTipPercentage(percentage) {
  return (billInput.value * percentage) / numInput.value;
}

fivePer.addEventListener("click", () => {
  tipAmount.textContent = calculateTipPercentage(0.05);
  totalAmount.textContent = billInput.value * 0.05
});

tenPer.addEventListener("click", () => {
  tipAmount.textContent = calculateTipPercentage(0.1);
  totalAmount.textContent = billInput.value * 0.1
});

fifteenPer.addEventListener("click", () => {
  tipAmount.textContent = calculateTipPercentage(0.15);
  totalAmount.textContent = billInput.value * 0.15
});

twentyFivePer.addEventListener("click", () => {
  tipAmount.textContent = calculateTipPercentage(0.25);
  totalAmount.textContent = billInput.value * 0.25
});

fiftyPer.addEventListener("click", () => {
  tipAmount.textContent = calculateTipPercentage(0.5);
  totalAmount.textContent = billInput.value * 0.50
});

tipInput.addEventListener("input", () => {
  tipAmount.textContent = calculateTipPercentage(Number(tipInput.value));
  totalAmount.textContent = billInput.value * Number(tipInput.value) / 100
});