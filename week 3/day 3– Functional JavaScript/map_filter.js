const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const doubledEven = evenNumbers.map(num => num * 2);

console.log("Original:", numbers);
console.log("Even Numbers:", evenNumbers);
console.log("Doubled Even Numbers:", doubledEven);