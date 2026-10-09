
/*
==================================================
JAVASCRIPT PRACTICE
Topics: this, call/apply/bind, Prototypes,
ES6 Classes, Static Methods, Getters/Setters,
Private Fields
==================================================
*/




// ================================================
// PART 1: THE `this` KEYWORD
// ================================================


// Q1. Global vs Function `this`
// Create showThis() and print `this` when called
// normally and in strict mode.
//
// Explanation:
// `this` depends on how a function is called.
// In a regular non-strict function, default binding
// differs from strict mode.
//
// Hint:
// Try a regular function and another function
// containing "use strict" at the top of its body.

function showThis(){
    console.log(this);
}

let showThis1=()=>{
    console.log(this);
}
function showThisStrict() {
  "use strict";
  console.log(this);
}

showThis()
showThis1()
showThisStrict()



// Q2. Object Method Context
// Create user = { name: "Anubhav" }
// Add a method that prints "Hello Anubhav".
// Store the method in another variable and call it.
//
// Explanation:
// A method's `this` depends on its call site.
// Extracting a method can lose its object context.
//
// Hint:
// Compare user.method() with a standalone
// function variable referencing that method.

let user={name:"Anubhav",
    greet(){
     console.log(`Hello ${this.name}`);
    }
}

let userGreet=user.greet
userGreet()


// Q3. Arrow Function vs Regular Function
// Create an object with name: "Rahul".
// Add one regular method and one arrow method.
// Print this.name from both.
//
// Explanation:
// Regular functions get `this` from their call site.
// Arrow functions inherit `this` lexically from
// their surrounding scope.
//
// Hint:
// Try both functions as object properties and
// observe the difference.

let users={
    name:"sudhanshu",
    nameP(){
     console.log(this.name);
    },
    nameP2:()=>{
    console.log(this.name);
    }
}

users.nameP()
users.nameP2()



// Q4. Nested Callback Problem
// Create an object with:
// name: "Rahul"
// hobbies: ["Coding", "Gaming", "Reading"]
//
// Print:
// Rahul likes Coding
// Rahul likes Gaming
// Rahul likes Reading
//
// Explanation:
// An arrow callback can preserve the surrounding
// method's `this`.
//
// Hint:
// Use a regular method and forEach() with an
// arrow function inside it.

let nestedCallback={
    name:"Sudhanshu",
    hobbie: ["Coding", "Gaming", "Reading"],
    Hobbies(){
        this.hobbie.forEach((a)=>console.log(`${this.name} likes ${a}`))

    }
}

console.log(nestedCallback.Hobbies())



// Q5. Event Handler Simulation
// Create an object representing a button.
// Write one regular function handler and
// one arrow function handler.
// Compare the value of `this`.
//
// Explanation:
// Event handlers may receive their `this`
// from the event system. Arrow functions
// inherit it from their lexical scope.
//
// Hint:
// Simulate calls yourself by invoking the
// handlers as object methods and separately.
// Remember, this is a simulation, not a real DOM event.
let button = {
    name: "Submit",

    regularHandler: function () {
        console.log("Regular:", this.name);
    },

    arrowHandler: () => {
        console.log("Arrow:", this.name);
    }
};

// Simulate the browser calling a regular event handler
button.regularHandler.call(button);

// Call the arrow function
button.arrowHandler();



// ================================================
// PART 2: call(), apply(), bind()
// ================================================


// Q6. Borrow a Method using call()
// Create person1 = { name: "Anubhav" }
// Create person2 = { name: "Rahul" }
// Create an introduction method and use call()
// to borrow it for both objects.
//
// Expected:
// Hi, I am Anubhav
// Hi, I am Rahul
//
// Explanation:
// call() invokes a function immediately,
// setting the function's `this` value.
//
// Hint:
// call() takes the target object as its first
// argument.

let person1 = { name: "Anubhav" };
let person2 = { name: "Rahul" };

function introduce() {
  console.log(`Hi, I am ${this.name}`);
}
introduce.call(person1);
introduce.call(person2);

// Q7. apply() with Array Arguments
// Create introduce(city, country).
// Use apply() to print:
// I am Rahul from Indore, India
//
// Explanation:
// apply() invokes a function immediately
// and accepts arguments in an array.
//
// Hint:
// Pass an object as the first argument
// and an array of function arguments as the second.

let person={name:"sudhanshu"}
function introduction(city,country){
    console.log(`I am ${this.name} from ${city} ,${country}`);
}
introduction.call(person,"Bhopal","INUSA")

// Q8. bind() for Delayed Execution
// Create a function that prints a user's name
// after 2 seconds using setTimeout() and bind().
//
// Explanation:
// bind() returns a new function with a
// permanently bound `this` value.
//
// Hint:
// Create an object with a name property.
// Bind the function to that object and pass
// the bound function to setTimeout().
//
function binding(){
    console.log(`i am binding with ${this.name} `);
}

let bindingbound=binding.bind(person)
setTimeout(bindingbound,2000)



// Q9. Custom Calculator
// Create an object with value: 100.
// Create a function that adds numbers to value.
// Use call(), apply(), and bind() to execute it.
//
// Explanation:
// call() and apply() invoke immediately.
// bind() creates a reusable bound function.
//
// Hint:
// Your function should use this.value.
// Try passing individual arguments to call(),
// an array to apply(), and saving bind() to a variable.

let num={value:100}
function addNumber(a,b,c){
    let sum=this.value+a+b+c
    console.log(`${sum} added in the original ${this.value}`);
}

addNumber.apply(num,[10,20,20])
addNumber.call(num,20,10,2)
let add=addNumber.bind(num)
add(10,22,32)

// ================================================
// PART 3: PROTOTYPES
// ================================================


// Q10. Prototype Lookup
// Create person = { name: "Rahul" }.
// Check whether person.hasOwnProperty("name")
// comes from the object itself or its prototype.
//
// Explanation:
// Objects can inherit properties and methods
// through the prototype chain.
//
// Hint:
// Compare Object.hasOwn(person, "hasOwnProperty")
// with Object.hasOwn(person, "name").
// Investigate Object.getPrototypeOf(person).

let person3={name:"Sudhanshu"}
console.log(person3.hasOwnProperty("name"));
console.log(Object.hasOwn(person3,"name"));
console.log(Object.getPrototypeOf(person3));

// Q11. Create a Custom Prototype Method
// Add a method called sum() to Array.prototype.
// Example: [1, 2, 3, 4].sum() -> 10
//
// Explanation:
// Prototypes allow objects to share methods.
// Modifying built-in prototypes is usually
// discouraged in production code.
//
// Hint:
// Use this inside sum() to refer to the array.
// A loop or reduce() can calculate the total.
Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
}
console.log([1,2,3,4,5,6].sum())



// Q12. Object.create()
// Create an animal object containing eat() and sleep().
// Create a dog object using Object.create().
// Access inherited methods from dog.
//
// Explanation:
// Object.create() creates a new object with
// the specified prototype.
//
// Hint:
// Pass animal to Object.create().
// Then call the inherited methods through dog.

let animal={
    eat(a,b){
        console.log(`${a} Eat ${b}`);
    },
    sleep(a){
        console.log(`${a} is Sleeping`);
    }
}
let Dog=Object.create(animal)
Dog.eat("lion","meat")
Dog.sleep("leion")


// Q13. Prototype Inheritance
// Create vehicle with start() and stop().
// Create car, bike and truck using
// prototype inheritance.
// Each should inherit start() and stop().
//
// Explanation:
// Objects can delegate property lookups
// to their prototype.
//
// Hint:
// Object.create() can establish a prototype
// relationship between objects.

let vehicle={
    start(a){
        console.log(`${a} is start`);
    },
    stop(a){
        console.log(`${a} is Stop`)
    }
}
let car=Object.create(vehicle)
let bike=Object.create(vehicle)
let truck=Object.create(vehicle)
car.start("car")
car.stop("car")

bike.start("bike")
bike.stop("bike")

truck.start("truck")
truck.stop("truck")


// Q14. Constructor Function + Prototype
// Create a Person constructor accepting name and age.
// Add Person.prototype.greet.
// Expected: Hi, I am Rahul
//
// Explanation:
// A constructor function creates instances.
// Prototype methods are shared among instances.
//
// Hint:
// Use this.name inside the constructor.
// Add greet to Person.prototype outside it.

function Person(name,age){
    this.name=name
    this.age=age

}
Person.prototype.greet=function(){
    console.log(`Hi I am ${this.name} i am ${this.age} Y/O`);
}

let p1=new Person("sudhanshu",45)
let p2=new Person("Mansi",55)
p1.greet()
p2.greet()
// Q15. Prototype Chain Investigation
// Create const arr = [].
// Print:
// arr.__proto__
// arr.__proto__.__proto__
// arr.__proto__.__proto__.__proto__
//
// Explain the output in comments.
//
// Explanation:
// Arrays inherit from Array.prototype,
// which inherits from Object.prototype.
// The chain eventually ends with null.
//
// Hint:
// Use Object.getPrototypeOf() to inspect
// each level. __proto__ is a legacy accessor.

// WRITE YOUR CODE HERE

const arr = []
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
// ================================================
// PART 4: ES6 CLASSES
// ================================================


// Q16. Basic Class
// Create Student class with name and course.
// Add introduce().
// Expected:
// I am Anubhav and I study MERN Stack
//
// Explanation:
// Classes provide syntax for creating
// objects with shared methods.
//
// Hint:
// Use a constructor() to initialize properties.
// Add introduce() as a class method.

class Student {
    constructor(a,b) {
     this.name=a,
     this.course=b        
    }
    introduce(){
     console.log(` I Am ${this.name} and I Study ${this.course} Stack`);
    }

}
let s1=new Student("sudhanshu","MERN")
s1.introduce()


// Q17. Employee Management
// Create Employee class with name and salary.
// Add increaseSalary() and showSalary().
//
// Explanation:
// Instance methods can read and update
// properties of each employee.
//
// Hint:
// Use this.salary to access the current salary.
// Decide how much increaseSalary() should add
// based on your own chosen input or parameter.
class Employee{
   constructor(name,salary){
    this.name=name,
    this.salary=salary
   }
   increaseSalary(a){
    return this.salary=this.salary+a
   }
   showSalary(){
    return this.salary
   }
}
let e1=new Employee("sudhansh",5000)
console.log(e1.showSalary());
console.log(e1.increaseSalary(5000));
console.log(e1.showSalary());
let e2=new Employee("Mansi",50000)
console.log(e2.showSalary());
console.log(e2.increaseSalary(5000));
console.log(e2.showSalary());

// Q18. Bank Account System
// Create BankAccount class with:
// deposit(), withdraw(), checkBalance()
//
// Bonus:
// Prevent withdrawing more than the balance.
//
// Explanation:
// Methods manage an object's internal state.
// Validate transactions before changing balance.
//
// Hint:
// Start with a balance property.
// Use conditions to reject invalid transactions.
// Test exact-balance and insufficient-balance cases.

class Bank{
    constructor(name,amt){
        this.name=name,
        this.amt=amt
    }
    depoist(d){
     this.amt=this.amt+d
     console.log("Deposted succesfully");
    }
    withDraw(w){
     if(w>this.amt){
        return "Not Enought Balnce"
     }else{
        this.amt=this.amt-w
        console.log(`Amount withdrwan is ${w} and balance is ${this.amt}`);
        return "Amount Withdrawn"
     }
    }
    checkBalance(){
    console.log(this.amt);
    }
}

let a1=new Bank("sudhanshu",200)
a1.checkBalance()
a1.depoist(500)
a1.withDraw(500)
a1.checkBalance()

// Q19. Inheritance Challenge
// Create Animal class with eat().
// Create Dog class using extends.
// Add bark() to Dog.
//
// Explanation:
// extends creates a class inheritance relationship.
// Dog inherits accessible methods from Animal.
//
// Hint:
// Use class Dog extends Animal.
// If Dog defines a constructor, call super()
// before using this.

class Animal{
    constructor(animal){
     this.animal=animal
    }
    eat(){
     console.log(`${this.animal} is Sleeping`);
    }
}
class Dogs extends Animal{
  constructor(a1,breed){
    super(a1)
    this.breed=breed
 }
 braks(){
    console.log(`${this.breed} Dogs Braks A Lot`);
 }
}
let d1=new Dogs("dog","German")
d1.braks()
d1.eat()

// Q20. Multi-Level Inheritance
// Create this inheritance chain:
//
// Person
//    |
// Employee
//    |
// Manager
//
// Add unique properties and methods at each level.
//
// Explanation:
// A subclass can inherit from another subclass,
// allowing methods and properties to be inherited
// across multiple levels.
//
// Hint:
// Use extends at each level.
// Use super() to call the parent constructor.

// WRITE YOUR CODE HERE
class person4{
constructor(name,age){
    this.name=name,
    this.age=age
}
print(){
    console.log(`My Name is ${this.name} and My Age is ${this.age}`);
    }}
class Employee1 extends person4{
    constructor(name,age,salary){
        super(name,age)
        this.salary=salary
    }
    employeeDetails(){
        console.log(`My Name is ${this.name} and My Age is ${this.age} and My Salary is ${this.salary}`);
    }
}
class Manager extends Employee1{
    constructor(name,age,salary,department){
        super(name,age,salary)
        this.department=department
    }
    managerDetails(){
        console.log(`My Name is ${this.name} and My Age is ${this.age} and My Salary is ${this.salary} and My Department is ${this.department}`);
    }
}
let m1 = new Manager("Sudhanshu", 25, 50000, "IT");
m1.print();
m1.employeeDetails();
m1.managerDetails();

// ================================================
// PART 5: STATIC METHODS
// ================================================


// Q21. Math Utility Class
// Create MathHelper with static methods:
// add(), subtract(), multiply(), divide()
// Use methods without creating an instance.
//
// Explanation:
// Static methods belong to the class itself,
// rather than an instance of the class.
//
// Hint:
// Declare methods using the static keyword.
// Call them using MathHelper.methodName().

// WRITE YOUR CODE HERE

class MathHelper{
    static add(a,b){
        return a+b
    }
    static subtract(a,b){return a-b}
    static multiply(a,b){return a*b}
    static divide(a,b){return a/b}
}

console.log(MathHelper.add(10, 5));       // 15
console.log(MathHelper.subtract(10, 5));  // 5
console.log(MathHelper.multiply(10, 5));   // 50
console.log(MathHelper.divide(10, 5));     // 2
// Q22. User Counter
// Create User class with a static property
// counting the number of users created.
// Example: Total Users: 5
//
// Explanation:
// A static property is shared at the class level,
// rather than stored separately on each instance.
//
// Hint:
// Increment the static counter in the constructor.
// Create five instances and then print the count.

class User{
    static usercounter=0
       
    constructor(user){
     this.user=user
     User.usercounter++
    }  
}
let u1=new User("sudhanshu")
let u2=new User("mansi")
let u3=new User("mansi")
let u4=new User("mansi")
let u5=new User("mansi")
console.log("Total User",User.usercounter)
// ================================================
// PART 6: GETTERS & SETTERS
// ================================================


// Q23. Full Name Getter
// Create Person class with firstName and lastName.
// Create a getter named fullName.
//
// Explanation:
// A getter lets you access a computed value
// using property-like syntax.
//
// Hint:
// Use get fullName() and combine the two names.
// Access it without parentheses.
class Person23{
    constructor(firstName,lastName){
        this.firstName=firstName,
        this.lastName=lastName
    }
   get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let p24=new Person23("manzi","rma")
console.log(p24.fullName)



// Q24. Email Validation Setter
// Create a setter named email.
// Reject invalid email values.
//
// Expected for invalid input:
// Invalid Email
//
// Explanation:
// A setter runs when a property is assigned.
// It can validate input before storing it.
//
// Hint:
// Use set email(value).
// Store the validated email in a separate property.
// Think of a basic check for "@" and a domain;
// this will be a simple check, not full email validation.

class EmailValidator{
    constructor(email){
        this.email=email
    }
    set email(a){
        if(!a.includes("@")||!a.includes(".com")){
            console.log("Enter a Vaild Email");
            return 
        }
        this._email=a
     
    }
}

let e12 = new EmailValidator("test@gmail.com");
let e21 = new EmailValidator("testgmail.com");

// ================================================
// PART 7: PRIVATE FIELDS
// ================================================


// Q25. Secure Bank Account
// Create #balance as a private field.
// Provide:
// deposit(), withdraw(), getBalance()
// Disallow direct access.
//
// Explanation:
// Private fields declared with # are only
// accessible inside the class body.
//
// Hint:
// Declare #balance inside the class.
// Update it only through methods.
// Test attempting to access account.#balance
// separately, as that syntax is not allowed
// outside the class.

// WRITE YOUR CODE HERE




// Q26. Student Grades System
// Create #marks as a private field.
// Provide setMarks() and getMarks().
//
// Explanation:
// Private fields protect internal data
// from direct access outside the class.
//
// Hint:
// Validate marks in setMarks() before updating.
// Return the private field from getMarks().

// WRITE YOUR CODE HERE
