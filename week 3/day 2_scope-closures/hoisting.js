// eg-1
console.log(a);
var a = 10;
// Output: undefined

// eg-2
console.log(b);
let b = 20;
// Output: ReferenceError

// eg-3
hello();
function hello() {
    console.log("Hello World");
}
// Output: "Hello World"