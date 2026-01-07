const numbers = [12, 45, 7, 89, 34];

const largest = numbers.reduce((max, num) => {
  return num > max ? num : max;
}, numbers[0]);

console.log("Numbers:", numbers);
console.log("Largest Number:", largest);