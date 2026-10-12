const receipt = {
  items: [
    { name: "Coffee", quantity: 3, unitPrice: 5.50 },
    { name: "Bagel", quantity: 1, unitPrice: 4.00 }
  ],
  taxRate: 0.06
};

const coffeeNameCell = document.getElementById("coffeeName");
coffeeNameCell.textContent = receipt.items[0].name;

const coffeeQuantityCell = document.getElementById("coffeeQuantity");
coffeeQuantityCell.textContent = receipt.items[0].quantity;

const coffeeUnitPriceCell = document.getElementById("coffeeUnitPrice");
coffeeUnitPriceCell.textContent = "$" + receipt.items[0].unitPrice.toFixed(2);

const bagelNameCell = document.getElementById("bagelName");
bagelNameCell.textContent = receipt.items[1].name;

const bagelQuantityCell = document.getElementById("bagelQuantity");
bagelQuantityCell.textContent = receipt.items[1].quantity;

const bagelUnitPriceCell = document.getElementById("bagelUnitPrice");
bagelUnitPriceCell.textContent = "$" + receipt.items[1].unitPrice.toFixed(2);

const printButton = document.getElementById("printButton");

printButton.addEventListener("click", function () {
  window.print();
});
const coffeeTotal = receipt.items[0].unitPrice * receipt.items[0].quantity;
const coffeeAmountCell = document.getElementById("coffeeAmount");
coffeeAmountCell.textContent = "$" + coffeeTotal.toFixed(2);

const bagelTotal = receipt.items[1].unitPrice * receipt.items[1].quantity;
const bagelAmountCell = document.getElementById("bagelAmount");
bagelAmountCell.textContent = "$" + bagelTotal.toFixed(2);

const subtotal = coffeeTotal + bagelTotal;
const subtotalAmount = document.getElementById("subtotalAmount");
subtotalAmount.textContent = "$" + subtotal.toFixed(2);

console.log(subtotal);
const taxAmount = subtotal * receipt.taxRate;
const taxAmountElement = document.getElementById("taxAmount");
taxAmountElement.textContent = "$" + taxAmount.toFixed(2);

const total = subtotal + taxAmount;
const totalAmountElement = document.getElementById("totalAmount");
totalAmountElement.textContent = "$" + total.toFixed(2);

console.log("Subtotal:", subtotal);
console.log("Tax:", taxAmount);
console.log("Total:", total);
