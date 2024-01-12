let displayValue = '';
let currentOperation = '';
let firstOperand = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === '') {
        // If displayValue is empty, set it to 0 before setting the operation
        displayValue = '0';
    }

    if (currentOperation !== '' && displayValue !== '') {
        calculateResult();
    }
    
    currentOperation = operation;
    firstOperand = displayValue;
    displayValue = '';

    updateDisplay();
}


function calculateResult() {
    if (firstOperand !== '' && displayValue !== '') {
        switch (currentOperation) {
            case '+':
                displayValue = String(parseFloat(firstOperand) + parseFloat(displayValue));
                break;
            case '-':
                displayValue = String(parseFloat(firstOperand) - parseFloat(displayValue));
                break;
            case '*':
                displayValue = String(parseFloat(firstOperand) * parseFloat(displayValue));
                break;
            case '/':
                if (parseFloat(displayValue) !== 0) {
                    displayValue = String(parseFloat(firstOperand) / parseFloat(displayValue));
                } else {
                    displayValue = 'Error';
                }
                break;
            default:
                break;
        }
        currentOperation = '';
        firstOperand = '';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    currentOperation = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');

    if (currentOperation !== '' && firstOperand !== '') {
        displayElement.value = `${firstOperand} ${currentOperation} ${displayValue}`;
    } else {
        displayElement.value = displayValue;
    }
    
}



document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperation(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
function appendNumber(number) {
    // Check if the input is a dot and if the displayValue already contains a dot
    if (number === '.' && displayValue.includes('.')) {
        return;
    }

    displayValue += number;
    updateDisplay();
}
