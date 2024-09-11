let displayValue = "";

function inputValue(value) {
  displayValue += value;
  document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").innerText = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").innerText = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").innerText = displayValue;
  } catch (error) {
    document.getElementById("display").innerText = "Error";
    displayValue = "";
  }
}
