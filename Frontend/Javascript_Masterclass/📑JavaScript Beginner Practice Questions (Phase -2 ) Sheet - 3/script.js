
// ============================================================
// JAVASCRIPT ARRAY METHODS PRACTICE
// forEach(), map(), filter(), reduce(),
// find(), findIndex(), some(), every()
// ============================================================


// ============================================================
// 1. forEach()
// ============================================================

// Q1. Intermediate
// Print each price with "₹" before it.
// Hint: forEach() + console.log()


// WRITE YOUR CODE HERE

let prices = [100, 250, 399, 499];
prices.forEach((a)=>{
    console.log(`₹${a}`);
})


// Q2. Hard
// Print "Pass" if marks are greater than 50.
// Print "Fail" otherwise.
// Output format: Anubhav - Pass
// Hint: forEach() + if/else

let students = [
    { name: "Anubhav", marks: 85 },
    { name: "Rahul", marks: 42 },
    { name: "Aman", marks: 90 },
    { name: "Priya", marks: 35 },
    { name: "Rohan", marks: 67 }
];

students.forEach((a)=>{
  if(a.marks>50){
    console.log(`${a.name}- pass`);
  }else{
    console.log(`${a.name}- fail`);
  }

})


// ============================================================
// 2. map()
// ============================================================

// Q3. Intermediate
// Convert all names into uppercase.
// Hint: map() + toUpperCase()

let names = ["anubhav", "rahul", "aman", "priya", "rohan"];

let uname=names.map((a)=>{
  return  a.toUpperCase()
})
console.log(uname);



// Q4. Hard
// Create a new array with a discountPrice property.
// Apply a 10% discount to each product.
// Do not modify the original array.
// Hint: map() + return a new object

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 30000 },
    { name: "Monitor", price: 15000 }
];

let discountA=products.map((a)=>{
   return {
...a,
discountPrice: a.price * 0.90
};
})
console.log(discountA);







// ============================================================
// 3. filter()
// ============================================================

// Q5. Intermediate
// Filter all even numbers.
// Hint: filter() + modulus operator

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];

// WRITE YOUR CODE HERE
let even=nums.filter((a)=>{
    if(a%2===0){
        return a
    }
})
console.log(even);



// Q6. Hard
// Return only active users.
// Hint: filter() + active === true

let users = [
    { name: "Anubhav", active: true },
    { name: "Rahul", active: false },
    { name: "Aman", active: true },
    { name: "Priya", active: false },
    { name: "Rohan", active: true }
];

// WRITE YOUR CODE HERE

let aciveU=users.filter((a)=>{
    if(a.active===true){
        return a
    }
})
console.log(aciveU);



// ============================================================
// 4. reduce()
// ============================================================

// Q7. Intermediate
// Find the total sum of the array.
// Hint: reduce() + accumulator + current value

let nums7 = [10, 20, 30, 40, 50, 60];

// WRITE YOUR CODE HERE
let sum=nums7.reduce((acc,cn)=>{
    return acc+cn
},0)

console.log(sum);


// Q8. Hard
// Count the frequency of each fruit.
// Hint: reduce() + empty object as initial value

let fruits = [
    "apple", "banana", "apple", "orange",
    "banana", "apple", "mango", "orange",
    "banana", "apple", "mango"
];

let frequenc=fruits.reduce((pv,cv)=>{
   if(pv[cv]){
    pv[cv]++
   }else{
    pv[cv]=1
   }    
return pv
},{})



// ============================================================
// 5. find()
// ============================================================

// Q9. Intermediate
// Find the first number greater than 50.
// Hint: find() + condition

let nums9 = [20, 35, 60, 80, 95, 45];
let fn=nums9.find((a)=>a>50)
console.log(fn);



// Q10. Hard
// Find the user with username "admin".
// Return the complete object.
// Hint: find() + user.username

let users10 = [
    { username: "rahul", role: "user" },
    { username: "aman", role: "editor" },
    { username: "admin", role: "superadmin" },
    { username: "priya", role: "user" },
    { username: "rohan", role: "editor" }
];

let admin=users10.find((a)=>a.username==="admin")
console.log(admin);



// ============================================================
// 6. findIndex()
// ============================================================

// Q11. Intermediate
// Find the index of number 90.
// Hint: findIndex() + condition

let nums11 = [10, 40, 90, 50, 30, 90];
let index11=nums11.findIndex((a)=>a===90)
console.log(index11);

// Q12. Hard
// Find the index of the first failed student.
// Failed if marks are less than 40.
// Hint: findIndex() + condition

let students12 = [
    { name: "A", marks: 90 },
    { name: "B", marks: 30 },
    { name: "C", marks: 70 },
    { name: "D", marks: 25 },
    { name: "E", marks: 85 }
];
let failed=students12.findIndex((a)=>a.marks<40)
console.log(failed);


// ============================================================
// 7. some()
// ============================================================

// Q13. Intermediate
// Check if any number is negative.
// Hint: some() + condition

let nums13 = [10, 20, -5, 40, 60];

console.log(nums13.some((a)=>a<0))




// Q14. Hard
// Check if any product is out of stock.
// Hint: some() + stock === 0

let products14 = [
    { name: "Laptop", stock: 5 },
    { name: "Phone", stock: 10 },
    { name: "Tablet", stock: 0 },
    { name: "Monitor", stock: 8 },
    { name: "Keyboard", stock: 0 }
];

console.log(products14.some((a)=>a.stock===0)
)

// ============================================================
// 8. every()
// ============================================================

// Q15. Intermediate
// Check if all numbers are positive.
// Hint: every() + condition

let nums15 = [10, 20, 30, 40, 50];

console.log(nums15.every((a)=>a>0))

// Q16. Hard
// Check if all students passed.
// Passing marks are 40 or above.
// Hint: every() + marks >= 40

let students16 = [
    { name: "A", marks: 80 },
    { name: "B", marks: 45 },
    { name: "C", marks: 60 },
    { name: "D", marks: 39 },
    { name: "E", marks: 75 }
];

console.log(students16.every((a)=>a.marks>40)
)





// ============================================================
// END OF PRACTICE
// ============================================================
