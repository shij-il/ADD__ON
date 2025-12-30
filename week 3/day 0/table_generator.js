const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number to generate table: ", (value) => {
  const num = Number(value);

  if (isNaN(num)) {
    console.log("Please enter a valid number");
  } else {
    console.log(`\nMultiplication Table of ${num}:\n`);

    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }

  rl.close();
});