function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number!";
        result.style.color = "red";
        return;
    }

    if (num % 2 === 0) {
        result.innerHTML = num + " is EVEN ";
        result.style.color = "green";
    } else {
        result.innerHTML = num + " is ODD ";
        result.style.color = "blue";
    }
}