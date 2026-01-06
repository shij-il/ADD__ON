let count = 0;
function increment() {
  count++;
  return count;
}
console.log(increment());
console.log(increment());

const increment = count => count + 1;
console.log(increment(0));
console.log(increment(1));