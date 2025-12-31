const age = 20;

let result;
if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}
console.log(`Age Status: ${result}`);

const status = age >= 18 ? "Adult" : "Minor";
console.log(`Age Status: ${status}`);