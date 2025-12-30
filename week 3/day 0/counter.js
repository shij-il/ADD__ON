const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;

function showStatus() {
  console.log("\nCurrent Count:", count);

  if (count > 0) {
    console.log("Status: Counter is Positive");
  } else if (count < 0) {
    console.log("Status: Counter is Negative");
  } else {
    console.log("Status: Counter is Neutral");
  }
}

function menu() {
  console.log("\nChoose an option:");
  console.log("1 → Increment");
  console.log("2 → Decrement");
  console.log("3 → Reset");
  console.log("0 → Exit");

  rl.question("Enter choice: ", (choice) => {
    if (choice === "1") {
      count++;
      showStatus();
      menu();
    } else if (choice === "2") {
      count--;
      showStatus();
      menu();
    } else if (choice === "3") {
      count = 0;
      showStatus();
      menu();
    } else if (choice === "0") {
      console.log("Exiting Counter App");
      rl.close();
    } else {
      console.log("Invalid choice");
      menu();
    }
  });
}

showStatus();
menu();