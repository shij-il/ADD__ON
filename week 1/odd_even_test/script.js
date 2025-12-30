function checkNumber() {
    var input = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

    if (input === "") {
        result.textContent = "Please enter a number.";
        result.style.color = "red";
    } else {
        var number = parseInt(input);

        if (number % 2 === 0) {
            result.textContent = number + " is an Even number.";
            result.style.color = "green";
        } else {
            result.textContent = number + " is an Odd number.";
            result.style.color = "blue";
        }
    }
}