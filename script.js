const printButton = document.getElementById("printButton");

printButton.addEventListener("click", function () {
  window.print();
});
const coffeePrice = 4.50;
const coffeeQuantity = 3;

const bagelPrice = 3.00;
const bagelQuantity = 1;

const coffeeTotal = coffeePrice * coffeeQuantity;
const bagelTotal = bagelPrice * bagelQuantity;

const subtotal = coffeeTotal + bagelTotal;

console.log(subtotal);
const taxRate = 0.06;

const taxAmount = subtotal * taxRate;

const total = subtotal + taxAmount;

console.log("Subtotal:", subtotal);
console.log("Tax:", taxAmount);
console.log("Total:", total);