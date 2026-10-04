// ============================================================
// JAVASCRIPT OBJECTS PRACTICE
// Beginner | Intermediate | Problem Solving | Hard
// ============================================================

// ============================================================
// 1. BEGINNER LEVEL
// ============================================================

// Q1. Create an Object
// Create an object for a student with:
// name, age, course
// Then print all values.

let student = {
  name: "Sudhanshu",
  age: 24,
  course: "consistencty",
};

console.log(student);

// Q2. Access Properties
// Print brand and model using both dot notation
// and bracket notation.

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022,
};

// WRITE YOUR CODE HERE

console.log(car.brand, car.model);
console.log(car["brand"], car["model"]);

// Q3. Update Object Value
// Change the age of the user from 20 to 25.

const user3 = {
  name: "Anubhav",
  age: 20,
};

user3.age = 25;

// Q4. Add New Property
// Add a new property isAdmin: true to this object.

const user4 = {
  name: "Rahul",
  age: 22,
};

user4.isAdmin = true;
console.log(user4);

// Q5. Delete Property
// Remove the password property from the object.

const account = {
  username: "john",
  password: "12345",
};
delete account.password;

// ============================================================
// 2. INTERMEDIATE LEVEL
// ============================================================

// Q6. Count Properties
// Write a function that returns how many properties
// an object has.
// Hint: Object.keys()

// Example:
// countProperties({ a: 1, b: 2, c: 3 }) // 3
let obj = { a: 1, b: 2, c: 3 };
let count = 0;
// WRITE YOUR CODE HERE
function countProperties(ob) {
  return Object.keys(ob).length;
}

console.log(countProperties(obj));

// Q7. Loop Through Object
// Print all keys and values from this object.
// Hint: for...in

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi",
};
for (let key in person) {
  console.log(key, person[key]);
}

// Q8. Check Property Exists
// Check whether "email" exists inside the object or not.
// Hint: in

const user8 = {
  name: "Aman",
  age: 21,
  email: "aman@example.com",
};

for (let key in user8) {
  if (key === "email") {
     console.log("email exist");
  }
}

// Q9. Merge Two Objects
// Merge these two objects into one.
// Hint: Spread operator

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

let mergeobj = { ...obj1, ...obj2 };

// Q10. Convert Object to Array
// Convert this object into an array of key-value pairs.
// Hint: Object.entries()

const user10 = {
  name: "Aman",
  age: 21,
};

console.log( Object.entries(user10))


// ============================================================
// 3. PROBLEM SOLVING LEVEL
// ============================================================

// Q11. Find Highest Value
// Find the student with the highest marks.
// Expected output: "Anubhav"

// Hint: Object.keys() / Object.entries()

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90,
};

const highest = Object.entries(marks).reduce((acc, curr) => {
    if (curr[1] > acc[1]) {
        return curr;
    }
    return acc;
});

console.log(highest[0]);
// Q12. Sum of Object Values
// Find the total salary.
// Expected output: 4500
// Hint: Object.values() + reduce()

const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500,
};

// WRITE YOUR CODE HERE
const totalsalary=Object.values(salaries).reduce((acc,cv)=>acc+cv,0)
console.log(totalsalary);
// Q13. Nested Object Access
// Print:
// 1. city
// 2. pincode

const user13 = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001,
  },
};
console.log(user13.address.city);
console.log(user13.address.pincode);


// Q14. Object Method Practice
// Create an object with:
// name, marks, getResult method
// If marks > 40, return "Pass"
// Otherwise, return "Fail"

const student14 = {
  name: "Anubhav",
  marks: 65,
  getResult:function(){
    if(this.marks>40){
      return "Pass"
    }else{
      return "Fail"
    }
  
  }
};

console.log(student14.getResult())

// Q15. Convert Array to Object
// Convert this array into an object.
// Expected output: { name: "Anubhav", age: 24 }
// Hint: Loop / Object construction

const arr15 = ["name", "Anubhav", "age", 24];
let obj15={}
for(let i=0;i<arr15.length;i+=2){
  obj15[arr15[i]]=arr15[i+1]
}
console.log(obj15);

// ============================================================
// 4. HARDER PRACTICE QUESTIONS
// ============================================================

// Q16. Frequency Counter
// Count the frequency of each character.
// Input: "banana"
// Expected output: { b: 1, a: 3, n: 2 }
// Hint: reduce() + object

const str16 = "banana";
console.log(str16.split("").reduce((acc,cv)=>{
  if(acc[cv]){
    acc[cv]+=1
  }else{
    acc[cv]=1
  }
return acc

},{}))

// Q17. Group By Property
// Group users by age.
// Hint: reduce() + object

const users17 = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 },
];

console.log(users17.reduce((acc,cv)=>{
 if(!acc[cv.age]){
  acc[cv.age]=[]
 }
 acc[cv.age].push(cv)
 return acc
},{}))

// Q18. Deep Property Check
// Check whether "user.address.city" exists
// inside an object dynamically.
// Hint: split(".") + loop


const data18 = {
  user: {
    name: "Anubhav",
    address: {
      city: "Nagpur",
      pincode: 440001,
    },
  },
};

const path18 = "user.address.city";

const keys = path18.split(".");
let current = data18;
let exists = true;

for (let key of keys) {
  if (
    current === null ||
    typeof current !== "object" ||
    !(key in current)
  ) {
    exists = false;
    break;
  }

  current = current[key];
}

console.log(exists); // true

// Q19. Object Comparison
// Check if two objects have the same keys and values.
// Expected output: true
// Hint: Object.keys() + every()

const obj19a = { a: 1, b: 2 };
const obj19b = { a: 1, b: 2 };

// WRITE YOUR CODE HERE

// Q20. Remove Duplicate Objects
// Remove duplicate objects from the array based on id.
// Hint: filter() / Set

const users20 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

// WRITE YOUR CODE HERE

// ============================================================
// END OF OBJECTS PRACTICE
// ============================================================
