let currentValue = '';

function displayNum(number) {
    currentValue += number;
    updateDisplay();
}

function add() {
    currentValue += '+';
    updateDisplay();
}

function subtract() {
    currentValue += '-';
    updateDisplay();
}

function multiply() {
    currentValue += '*';
    updateDisplay();
}

function divide() {
     currentValue += '/';
     updateDisplay();
}

function decimalNum() {
    currentValue += '.';
    updateDisplay();

}

function clearAll() {
      currentValue = '';
      updateDisplay();
}

function calculateResult() {
  try {
      const result = eval(currentValue);
      document.getElementById('output').value = result;
  } catch (error) {
      document.getElementById('output').value = 'Error';
  }
}

function updateDisplay() {
  document.getElementById('output').value = currentValue;
}
