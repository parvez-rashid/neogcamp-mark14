import "./styles.css";

var initialPrice = document.querySelector("#init-price");
var stockQuantity = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var resultBox = document.querySelector("#result");

function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    var profit = ((current - initial) * quantity).toFixed(2);
    var profitPercentage = ((profit / initial) * 100).toFixed(2);
    showOutput(
      `Profit is ${profit}. Profit percentage is ${profitPercentage}%`
    );
  } else if (current < initial) {
    var loss = ((initial - current) * quantity).toFixed(2);
    var lossPercentage = ((loss / initial) * 100).toFixed(2);
    showOutput(`Loss is ${loss}. Loss percentage is ${lossPercentage}%`);
  } else {
    showOutput("You have neither profit nor loss");
  }
}

function submitHandler() {
  if (
    initialPrice.value === "" ||
    stockQuantity.value === "" ||
    currentPrice.value === ""
  ) {
    resultBox.innerText = "Please enter all values!";
  } else {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    if (qty < 1) {
      showOutput("Quantity should be at least be 1");
    } else {
      calculateProfitAndLoss(ip, qty, curr);
    }
  }
}

function showOutput(message) {
  resultBox.innerText = message;
}

submitButton.addEventListener("click", submitHandler);
