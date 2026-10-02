// Q1. Write a function expression for multiplication.
let multiplication = function (a, b) {
  return a * b;
};
console.log(multiplication(5, 8));

// Q2. Convert a normal function into an arrow function.
let mul = (a, b) => {
  return a * b;
};
console.log(mul(3, 5));

// Q3. Create a function that accepts unlimited numbers and returns their sum using the rest operator.
function unlimetedRe(...ulp) {
  let sum = ulp.reduce((a, cv) => {
    return (a = a + cv);
  }, 0);
  return sum;
}

console.log(unlimetedRe(1, 2, 3, 4, 5, 5, 6, 76, 7));

// Q4. Write a function that counts vowels in a string.
function vowels(a) {
  a=a.toLowerCase();
  let vowels = 0;
  for(let i=0;i<=a.length;i++){
    if(  a[i] === "a" ||
            a[i] === "e" ||
            a[i] === "i" ||
            a[i] === "o" ||
            a[i] === "u"){
                vowels++
            }
  }
  
  return  vowels;
}
console.log(vowels("sudhanshu"));

// Q5. Create a function that checks if a string is a palindrome.
function palindrome(a) {
  let reverse = "";
  for (let i = a.length - 1; i >= 0; i--) {
    reverse = reverse + a[i];
  }
  if (a === reverse) {
    console.log("they are palindrome");
    return;
  }
  return "Not palindrome";
}
palindrome("civic");

// Q6. Write a callback function example using setTimeout.
function callback(cb) {
  console.log("function callback called");
  return setTimeout(() => {
    cb();
  }, 1000);
}
function f2() {
  console.log("cb is called ");
}
callback(f2);

// Q7. Create a higher-order function that executes another function twice.
function hof(a) {
  a();
  a();
}
hof(f2);

// Q8. Write a function that returns another function.
function first() {
  console.log("Yo i am First function");
  return function () {
    console.log("yo i am second function that is return in another function ");
  };
}
let firs = first();
firs();

// Q9. Create a pure function for subtraction.
function pure(a, b) {
  let sub = a - b;
  return sub;
}
console.log(pure(9, 5));

// Q10. Create an impure function using a global variable modification.
var global;
function impure(a, b) {
  global = a + b;
  return global;
}

console.log(impure(9, 8));
console.log(global);
