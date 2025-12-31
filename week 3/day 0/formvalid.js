const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter username: ", (username) => {
  rl.question("Enter password: ", (password) => {

    let isValid = true;

    if (username.trim() === "") {
      console.log("Username Error: Username is required");
      isValid = false;
    } else if (username.length < 4) {
      console.log("Username Error: Username must be at least 4 characters");
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      console.log("Username Error: Username can contain only letters and numbers");
      isValid = false;
    }

    if (password.trim() === "") {
      console.log("Password Error: Password is required");
      isValid = false;
    } else if (password.length < 6) {
      console.log("Password Error: Password must be at least 6 characters");
      isValid = false;
    } else if (!/\d/.test(password)) {
      console.log("Password Error: Password must contain at least one number");
      isValid = false;
    }

    if (isValid) {
      console.log("\nLogin successful!");
    } else {
      console.log("\nLogin failed. Please fix the above errors.");
    }

    rl.close();
  });
});