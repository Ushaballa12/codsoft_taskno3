let input = ''; // Initialize input variable

function appendToDisplay(char) {
    input += char; // Append character to input
    updateDisplay(); // Update both input and output displays
}

function clearDisplay() {
    input = ''; // Clear input
    updateDisplay(); // Update both input and output displays
}

function calculate() {
    try {
        let value = eval(input); // Calculate value
        document.getElementById('value').textContent = value; // Update output display
        input = ''; // Clear input after calculation
        updateDisplay(); // Update input display (clear input)
    } catch (error) {
        document.getElementById('value').textContent = 'Error'; // Display error if calculation fails
    }
}

function updateDisplay() {
    document.getElementById('input').textContent = input; // Update input display
}