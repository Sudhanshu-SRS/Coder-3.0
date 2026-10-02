// Q1. Build a custom Array.prototype.map.
// Do not use the built-in map() method.
Array.prototype.Mymap = function (arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
};

num = [1, 2, 3, 4, 5];
console.log(
  num.Mymap(num, (a) => {
    return a * 2;
  }),
);

// Q2. Build a custom Array.prototype.filter.
// Do not use the built-in filter() method.
Array.prototype.Myfilter = function (arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(num.Myfilter(num, (a) => a % 2 === 0));

// Q3. Build a custom Array.prototype.reduce.
// Do not use the built-in reduce() method.
Array.prototype.MyReduce=function(arr,cb,inv){
    let total=inv
    for(let i=0;i<arr.length;i++){
       total=cb(total,arr[i])
    }
    return total
}

console.log(num.MyReduce(num,(a,c)=>{
return a+c
},0))
// Q4. Implement a deep clone function.
// The function should create a completely independent copy
// of a nested object or array.
// Q4. Implement a deep clone function.

let student = {
    name: "Rahul",
    age: 21,
    address: {
        city: "Nagpur",
        pincode: 440001
    },
    marks: {
        maths: 85,
        science: 90
    },
    hobbies: ["Cricket", "Coding"]
};

let s1=JSON.parse(JSON.stringify(student))
console.log(s1);
console.log(student);
console.log(s1.age=24);
console.log(s1);
console.log(student);
// Q5. Create a Student Management System.
// Requirements:
// - Add student
// - Remove student
// - Find student
// - Update student marks
// - Get students who passed
// - Find student with highest marks




// Q6. Create a Library Management System.
// Requirements:
// - Add book
// - Remove book
// - Find book
// - Borrow book
// - Return book
// - Show available books

// Q7. Create an Expense Tracker.
// Requirements:
// - Add expense
// - Delete expense
// - Find expense
// - Calculate total expenses
// - Find highest expense
// - Filter expenses by category

// Q8. Build an Inventory Management System.
// Requirements:
// - Add product
// - Remove product
// - Update stock quantity
// - Find product
// - Calculate total inventory value
// - Find products with low stock

// Q9. Create a function composition utility.
// Create multiple functions and compose them
// so the output of one function becomes the input
// of the next function.
function addTen(x) {
    return x + 10;
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

function compose(...functions) {
    return function (value) {
        return functions.reduce((result, fn) => {
            return fn(result);
        }, value);
    };
}

let result = compose(addTen, double, square);

console.log(result(5));
// Q10. Build a Calculator using objects and methods.
// Requirements:
// - Add
// - Subtract
// - Multiply
// - Divide
// - Modulus
// - Store the result
