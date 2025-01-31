let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let expression = display.value;
    expression = expression.replace(/&divide;/g, '/').replace(/&times;/g, '*').replace(/&minus;/g, '-').replace(/&plus;/g, '+');
    
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error'; 
    }
}