let display = document.getElementById("display");

function press(value) {
    if (display.innerHTML === "0") {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

function clearDisplay() {
    display.innerHTML = "0";
}

function deleteChar() {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if (display.innerHTML === "") display.innerHTML = "0";
}

function calculate() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch {
        display.innerHTML = "Error";
    }
}