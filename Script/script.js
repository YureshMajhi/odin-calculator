let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  //Storing all components of calculator
  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let clear = document.querySelector(".clear");
  let decimal = document.querySelector(".decimal");
  let equal = document.querySelector(".equal");

  let previousText = document.querySelector(".previous");
  let currentText = document.querySelector(".current");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentText.textContent = currentValue;
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousText.textContent = previousValue + " " + operator;
      currentText.textContent = currentValue;
    })
  );

  clear.addEventListener("click", function () {
    currentText.textContent = "";
    previousText.textContent = "";
    currentValue = "";
    previousValue = "";
    operator = "";
  });

  equal.addEventListener("click", function () {
    calculate();
    currentText.textContent = currentValue;
    previousText.textContent = "";
  });

  decimal.addEventListener("click", function () {
    addDecimal();
    currentText.textContent = currentValue;
  });
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "X") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}
