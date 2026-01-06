const isEven = num => num % 2 === 0;
const square = num => num * num;

const data = [1, 2, 3, 4, 5];
const result = data.filter(isEven).map(square);
console.log("Result:", result);