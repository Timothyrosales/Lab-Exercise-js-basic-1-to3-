function calculate() {
     let b = Number(document.getElementById("num2").value);
    let a = Number(document.getElementById("num1").value);
    

    document.getElementById("sum").textContent = a + b;
    document.getElementById("difference").textContent = a - b;
    document.getElementById("product").textContent = a * b;

    if (b !== 0) {
        document.getElementById("quotient").textContent = a / b;
    } else {
        document.getElementById("quotient").textContent = "Cannot divide by 0";
    }
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").textContent = "0";
    document.getElementById("difference").textContent = "0";
    document.getElementById("product").textContent = "0";
    document.getElementById("quotient").textContent = "0";
}