let otp = Math.floor(1000 + Math.random() * 9000);

console.log("Your OTP is:", otp);
//Reverse a 3-letter string manually.
let string="sud"
let reverse=string[2]+string[1]+string[0]
console.log(reverse);
//Find the last character of a string.
let name = "Sudhanshu";

let lastCharacter = name[name.length - 1];

console.log("Last character:", lastCharacter);
//Convert a full name into uppercase initials.
let firstName = "sudhanshu";
let middleName = "ravindra";
let lastName = "sakhare";

let initials =
    firstName[0].toUpperCase() +
    middleName[0].toUpperCase() +
    lastName[0].toUpperCase();

console.log("Initials:", initials);
//Check whether two strings are equal ignoring case sensitivity.
let string1 = "JavaScript";
let string2 = "javascript";

if (string1.toLowerCase() === string2.toLowerCase()) {
    console.log("Both strings are equal");
} else {
    console.log("Strings are not equal");
}
//Create a simple login validation system.
let username = "admin";
let password = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (enteredUsername === username && enteredPassword === password) {
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}
//Find whether a number is a 2-digit or 3-digit number
let num = 250;

if (num >= 10 && num <= 99) {
    console.log("It is a 2-digit number");
} else if (num >= 100 && num <= 999) {
    console.log("It is a 3-digit number");
} else {
    console.log("It is neither a 2-digit nor 3-digit number");
}

//Create a mini ATM balance checkerlet balance = 5000;
let balance = 5000;
let withdrawAmount = 2000;

if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance);
} else {
    console.log("Insufficient balance");
}
//Simulate a traffic light system using switchlet light = "red";
let light="red"
switch (light) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}
//Small marksheet generator using variables and conditionals
let name1 = "Rahul";

let maths = 75;
let science = 82;
let english = 68;

let total = maths + science + english;
let percentage = total / 3;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("----- MARKSHEET -----");
console.log("Name:", name1);
console.log("Maths:", maths);
console.log("Science:", science);
console.log("English:", english);
console.log("Total:", total);
console.log("Percentage:", percentage);
console.log("Grade:", grade);