const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    rl.question("Enter third number: ", (c) => {

      const num1 = Number(a);
      const num2 = Number(b);
      const num3 = Number(c);

      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Please enter valid numbers only");
      } else {
        let largest;

        if (num1 >= num2 && num1 >= num3) {
          largest = num1;
        } else if (num2 >= num1 && num2 >= num3) {
          largest = num2;
        } else {
          largest = num3;
        }

        console.log("Largest Number is:", largest);
      }

      rl.close();
    });
  });
});