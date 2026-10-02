// Q1. Write a recursive function for factorial.
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Q2. Write a recursive Fibonacci function.
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// Q3. Create a function that finds power using recursion.
function recursivepower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * recursivepower(base, exponent - 1);
}

console.log(recursivepower(3, 6));

// Q4. Create an IIFE that prints "Executed".
(function IIFE() {
  console.log("Excuted");
})();

// Q5. Write a function that memoizes factorial calculation.
function memoizeFactorial() {
  const cache = {};

  return function fact(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;

    // Check if the result is already in the cache
    if (n in cache) {
      return cache[n];
    }

    // Calculate, store in cache, and return
    cache[n] = n * fact(n - 1);
    return cache[n];
  };
}

// Usage:
const factorial1 = memoizeFactorial();

console.log(factorial1(5)); // 120 (Calculated)
console.log(factorial1(6)); // 720 (Uses cached result of 5, only multiplies 6 * 120)
console.log(factorial1(5)); // 120 (Fetched instantly from cache)

// Q6. Create a closure counter function.
function clouser() {
  let count = 0;
  return function () {
    return count++;
  };
}
let count = clouser();
let count1 = clouser();
console.log(count());
console.log(count());
console.log(count1());
console.log(count1());

// Q7. Write a currying example for addition.
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(4)(5));

// Q8. Create debounce function logic.
function debounce() {
  console.log("function runned");
  setTimeout(() => {
    console.log("debounce occures");
  }, 2000);
}
debounce();

// Q9. Create throttle function logic.

const throtell = (fn, delay) => {
  let canrun = true;
  return function () {
    if (canrun) {
      fn();
      canrun = false;
      setTimeout(() => {
        canrun = true;
      }, delay);
    }
  };
};
function hello() {
  console.log("Hello From THrottle");
}
let thro = throtell(hello, 300);
thro();
thro();
// Q10. Write a function that executes only once.

function once(fn) {
  let executed = false;

  return function () {
    if (!executed) {
      fn();
      executed = true;
    }
  };
}
function hello() {
  console.log("Hello");
}

let runOnce = once(hello);

runOnce();
runOnce();
runOnce();

// Q11. Create a custom implementation of map.

function Mymap(arr, cb) {
  let resut = [];
  for (let i = 0; i < arr.length; i++) {
    resut.push(cb(arr[i], i, arr));
  }
  return resut;
}

let number = [1, 2, 3, 4];
let double = Mymap(number, (a,b,c) => {
  console.log(b,c);
  return a * 2;
});
console.log(double);

// Q12. Create a custom implementation of filter.

function myFilter(arr, cb) {
  let result = [];
  for (let i = 0; i <= arr.lenght; i++) {
    if (cb[i]) {
      result.push(cb(arr[i]));
    }
  }
  return result;
}
let arr = [10, 15, 20, 25, 30];
let filter = myFilter(arr, function (num) {
  return num > 5;
});
console.log(filter);

// Q13. Create a custom implementation of reduce.
function myreduce(arr, cb, inv) {
  let total = inv;
  for (let i = 0; i < arr.length; i++) {
    total = cb(total, arr[i]);
  }
  return total;
}
let num = [1, 2, 3, 4, 5];
let calcul = myreduce(
  num,
  function (a, b) {
    return a + b;
  },
  0,
);
console.log(calcul);
// Q14. Create a custom implementation of forEach.
function MyForeach(arr,cb){
    for(let i=0;i<arr.length;i++){
        cb(arr[i])
    }
}

let array=[1,2,3,4,5,5]
MyForeach(array,function(num){
   console.log(num);
})

// Q15. Explain the output of a given JavaScript code snippet.
// Focus on explaining the execution order and why the output occurs.
function test() {
    return;
    console.log("Hello");
}
console.log(test());
//Because after return nothing is run in js or excuted the function get return to where it start from 