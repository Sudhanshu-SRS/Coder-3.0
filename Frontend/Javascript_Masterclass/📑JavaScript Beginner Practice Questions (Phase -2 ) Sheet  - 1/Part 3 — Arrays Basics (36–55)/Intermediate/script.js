// Q1. Use splice to remove elements.
let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let remove = arra.splice(0);
console.log(arra);
// Q2. Use splice to insert elements.
arra.splice(0, 0, 2, 3);
console.log(arra);
// Q3. Use slice to copy an array.
let arr = [4, 5, 6];

let copy = arr.slice(0, 3);

console.log(copy);

// Q4. Find the index of an element in an array.
console.log(arr.indexOf(5));

// Q5. Check if an array contains a particular value.
console.log(arr.includes(4));

// Q6. Join array elements with ".".
console.log(arr.join("-"));

// Q7. Merge two arrays using the spread operator.
console.log([...arr, ...arra]);

// Q8. Copy an array using the spread operator.
let arr3 = [...arra];
console.log(arr3);

// Q9. Find the maximum value in an array using Math.max.
console.log(Math.max(...arr3));

// Q10. Swap two variables using destructuring.
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
