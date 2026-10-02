//Take two numbers and print which one is greater
let num1 = 25;
let num2 = 40;

if (num1 > num2) {
  console.log(num1 + " is greater");
} else if (num2 > num1) {
  console.log(num2 + " is greater");
} else {
  console.log("Both numbers are equal");
}
//Check whether a number lies between 10 and 50
let num = 35;

if (num >= 10 && num <= 50) {
  console.log("Number is between 10 and 50");
} else {
  console.log("Number is not between 10 and 50");
}
//Check whether a password length is greater than 8
let password = "javascript123";

if (password.length > 8) {
  console.log("Password length is greater than 8");
} else {
  console.log("Password is too short");
}
//Check if a person can drive
let age = 25;
let hasLicense = true;

if (age > 18 && hasLicense === true) {
  console.log("Person can drive");
} else {
  console.log("Person cannot drive");
}
//Check whether a number is divisible by 2, 3, or both

if (num % 2 === 0 && num % 3 === 0) {
  console.log("Number is divisible by both 2 and 3");
} else if (num % 2 === 0) {
  console.log("Number is divisible by 2");
} else if (num % 3 === 0) {
  console.log("Number is divisible by 3");
} else {
  console.log("Number is not divisible by 2 or 3");
}
//Print Good Morning, Good Afternoon, or Good Evening based on time
let hour = 15;

if (hour >= 5 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 17) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 23) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
//Find whether a number is a multiple of 10
let num3 = 50;

if (num3 % 10 === 0) {
  console.log("Number is a multiple of 10");
} else {
  console.log("Number is not a multiple of 10");
}
//Simple discount calculator
let price = 5000;
let discount = 20;

let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

console.log("Original Price:", price);
console.log("Discount:", discountAmount);
console.log("Final Price:", finalPrice);

//Check whether a product is in stock
let stock = 10;

if (stock > 0) {
  console.log("Product is in stock");
} else {
  console.log("Product is out of stock");
}
//Calculate final bill after GST
let bill = 1000;
let gst = 18;

let gstAmount = (bill * gst) / 100;
let finalBill = bill + gstAmount;

console.log("Bill Amount:", bill);
console.log("GST Amount:", gstAmount);
console.log("Final Bill:", finalBill);
