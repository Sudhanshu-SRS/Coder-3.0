// Q1. Create an array of 5 fruits.
let fruits=["mango",'orange','banana','grapes','tomato']


// Q2. Print the first and last element of the array.
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


// Q3. Find the length of the array.

console.log(fruits.length);

// Q4. Add an element at the end of the array using push.
console.log(fruits.push("cherry"));


// Q5. Remove the last element of the array using pop.
console.log(fruits.pop());


// Q6. Add an element at the beginning of the array using unshift.
console.log(fruits.unshift("strawberry"));


// Q7. Remove the first element of the array using shift.
console.log(fruits.shift()
);


// Q8. Reverse an array.
console.log(fruits.reverse());

// Q9. Sort an array of numbers in ascending order.
let number=[4,9,8,6,8,8,54,42,564,61625,2,45,47,78,65,23,56,23,25]
console.log(number.sort((a,b)=>a-b));


// Q10. Sort an array of numbers in descending order.
console.log(number.sort((a,b)=>b-a));