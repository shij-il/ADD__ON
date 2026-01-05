let x = 10;

function demoScope() {
    let y = 20;
    console.log("Inside function:", x, y);
}

demoScope();

if (true) {
    let z = 30;
    console.log("Inside block:", z);
}
