// Q1. Use forEach to print all numbers doubled.
let num=[1, 2, 3, 4, 5,44,32,56,4,3,50,53,52,14,45,6,76,7,87,-1,-3];
console.log(num.forEach((a)=>a*2));

// Q2. Use map to square all numbers.
let sq=num.map((a)=>a**a)

// Q3. Use filter to get even numbers.
let even=num.filter((a)=>a%2===0)

// Q4. Use reduce to calculate the sum of all numbers.
let sum=num.reduce((ac,cn)=>ac+cn,0)

// Q5. Use reduce to find the maximum number.
let max=num.reduce((a,cv)=>{
    
    if(a>cv){
      a=cv
    }
   return a
},0)
console.log(max);

// Q6. Use find to get the first even number.
console.log(num.find(num=>num%2===0));

// Q7. Use findIndex to locate the first number greater than 50.

let index=num.findIndex((num=>num>50))

// Q8. Use some to check if any number is negative.
let check=num.some((num=>num<0))
console.log(check);

// Q9. Use every to check if all numbers are positive.
let pos=num.every((num=>num>0))

// Q10. Create an array of names and convert all names to uppercase.
let names=["sudhanshu","jayant","ram","luxs"]
let up=names.map((a)=>a.toUpperCase())
console.log(up);

// Q11. Filter all students whose marks are greater than 80.
let students = [
    { name: "Rahul", marks: 75 },
    { name: "Amit", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Rohit", marks: 68 },
    { name: "Sneha", marks: 88 }
]

let pass=students.filter((s)=>s.marks>80)
console.log(pass);
// Q12. Calculate the average of numbers using reduce.
let numbers12 = [10, 20, 30, 40, 50];
let avg=numbers12.reduce((a,b)=>{
return a+b/numbers12.length-1
},0)
console.log(avg);
// Q13. Count the occurrences of each number in an array.
let numbers13 = [2, 3, 2, 5, 3, 2, 7, 5, 3];
let count = {};
numbers13.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
});
console.log(count);

// Q14. Flatten a nested array using flat.
let nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.flat(1));

// Q15. Remove duplicate values from an array using Set.
let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];
let set=new Set(duplicateNumbers)
console.log(set);

// Q16. Sort an array of objects by age.
let users = [
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 19 },
    { name: "Priya", age: 30 },
    { name: "Rohit", age: 22 }
];

console.log(users.sort((a,b)=>{
  return a.age-b.age
}))

// Q17. Find the total price of all items in a shopping cart.
let cart = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Headphones", price: 2500 }
];

let total=cart.reduce((tv,cv)=>{tv+cv.price},0)
console.log(total);
// Q18. Group users by age.
let usersByAge = [
    { name: "Rahul", age: 20 },
    { name: "Amit", age: 25 },
    { name: "Priya", age: 20 },
    { name: "Rohit", age: 25 },
    { name: "Sneha", age: 30 }
];
let age20=usersByAge.filter((a)=>a.age===20)
let age25=usersByAge.filter((a)=>a.age>=25)

// Q19. Chain filter and map together.
let numbers19 = [5, 10, 15, 20, 25, 30];
// Example requirement:
// First filter the numbers greater than 10,
// then multiply the remaining numbers by 2.
let chain=numbers19.filter((a)=>a>10).map((b)=>b*2)
console.log(chain);


// Q20. Explain the difference between map and forEach.
let numbers20 = [1, 2, 3, 4, 5];
let map=numbers20.map((a)=>a*2)
let foreach=numbers20.forEach((a)=>a*2)