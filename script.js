let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function operation(operator) {
    currentInput += operator;
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch(error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
