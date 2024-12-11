let memory = 0; 
let currentOperation = null; 
let previousValue = null; 

function clearMemory() {
    memory = 0;
    updateMemory();
}

function recallMemory() {
    document.getElementById("result").value = memory;
}

function addMemory() {
    memory += parseFloat(document.getElementById("result").value || 0);
    updateMemory();
}

function subtractMemory() {
    memory -= parseFloat(document.getElementById("result").value || 0);
    updateMemory();
}

function calculateMarkup() {
    const result = document.getElementById("result");
    const value = parseFloat(result.value);
    result.value = value + (value * 0.1); 
}

function updateMemory() {
    document.getElementById("memory").textContent = `M1: ${memory}`;
}

function appendNumber(number) {
    const result = document.getElementById("result");
    if (result.value === "0" || currentOperation) {
        result.value = number; 
        currentOperation = null; 
    } else {
        result.value += number; 
    }
}

function operate(operation) {
    if (currentOperation !== null) {
        calculate(); 
    }
    previousValue = parseFloat(document.getElementById("result").value); 
    currentOperation = operation; 
}


function calculate() {
    if (!currentOperation || previousValue === null) return; 

    const currentValue = parseFloat(document.getElementById("result").value); 
    let result;

 
    switch (currentOperation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = currentValue !== 0 ? previousValue / currentValue : "Error"; 
            break;
        default:
            result = currentValue; 
    }

    document.getElementById("result").value = result; 
    currentOperation = null; 
    previousValue = null; 
}

function clearAll() {
    document.getElementById("result").value = "0"; 
    currentOperation = null; 
    previousValue = null; 
}


function clearEntry() {
    document.getElementById("result").value = "0"; 
}


function backspace() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1) || "0"; 
}


function toggleSign() {
    const result = document.getElementById("result");
    result.value = parseFloat(result.value) * -1; 
}


function calculatePercentage() {
    const result = document.getElementById("result");
    result.value = parseFloat(result.value) / 100; 
}


function squareRoot() {
    const result = document.getElementById("result");
    result.value = Math.sqrt(parseFloat(result.value)); 
}