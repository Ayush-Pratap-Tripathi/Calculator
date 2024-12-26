function clearScreen() {
    document.getElementById("calculator-screen").value = "";
}

function appendToScreen(value) {
    document.getElementById("calculator-screen").value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("calculator-screen").value);
        document.getElementById("calculator-screen").value = result;
    } catch (error) {
        alert("Invalid input");
    }
}

document.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        calculateResult();
    }
})