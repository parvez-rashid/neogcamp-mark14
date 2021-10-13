import "./styles.css";

var initialPrice = document.querySelector("#init-price");
var stockQuantity = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var resultBox = document.querySelector("#result");

function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Profit is ${profit}. Profit percentage is ${profitPercentage}%`
    );
  } else if (current < initial) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(`Loss is ${loss}. Loss percentage is ${lossPercentage}%`);
  } else {
    showOutput("You have neither profit nor loss");
  }
}

function submitHandler() {
  var ip = Math.abs(initialPrice.value);
  var qty = Math.abs(stockQuantity.value);
  var curr = Math.abs(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(message) {
  resultBox.innerText = message;
}

submitButton.addEventListener("click", submitHandler);
