// ==========================================
// PART 1: VARIABLES, FUNCTIONS & CONDITIONS
// ==========================================

// Q1. Create a function that returns the sum of two numbers.
// Example: add(10, 20) → 30

function add(num1, num2) {
  return num1 + num2;
}

// Q2. Create a function that returns the square of a number.
// Example: square(5) → 25

function square(num) {
  return num * num;
}

// Q3. Check whether a number is Even or Odd.
// Example: checkEvenOdd(7) → "Odd"

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Q4. Return the larger number among two numbers.
// Example: max(10, 20) → 20
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Q5. Check if a person is eligible to vote.
// Example: isEligible(18) → "Eligible"

function isEligible(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

// ==========================================
// PART 2: LOOPS
// ==========================================

// Q6. Print numbers from 1 to 50 using a loop.

function printNumbers() {
  for (let i = 1; i <= 50; i++) {
    console.log(i);
  }
}

// Q7. Print all even numbers between 1 and 100.

function printEvenNumbers() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}

// Q8. Find the sum of numbers from 1 to 100.
// Expected output: 5050

function sumNumbers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

// Q9. Print the multiplication table of a number.
// Example: table(5)
// 5 x 1 = 5
// ...
// 5 x 10 = 50

function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Q10. Count how many digits are present in a number.
// Example: countDigits(12345) → 5

function countDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

// ==========================================
// PART 3: STRINGS
// ==========================================

// Q11. Reverse a string.
// Example: reverseString("hello") → "olleh"

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Q12. Count vowels in a string.
// Example: countVowels("javascript") → 3

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Q13. Check whether a string is a palindrome.
// Example: isPalindrome("madam") → true

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Q14. Capitalize the first letter of every word.
// Example: capitalize("hello world") → "Hello World"

function capitalize(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// Q15. Count how many times a character appears.
// Example: countChar("javascript", "a") → 2

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// ==========================================
// PART 4: ARRAYS
// ==========================================

// Q16. Find the largest number in an array.
// Example: [10, 20, 30, 40, 50] → 50
let ar = [10, 20, 30, 40, 50];
function largetnum(arr) {
  return arr.reduce((acc, cv) => {
    if (acc > cv) {
      return acc;
    } else {
      return cv;
    }
  });
}

console.log(largetnum(ar));

// Q17. Find the smallest number in an array.
// Example: [10, 20, 30, 40, 50] → 10

function smallnum(arr) {
  return arr.reduce((acc, cv) => Math.min(acc, cv));
}

console.log(smallnum(ar));

// Q18. Find the sum of all array elements.
// Example: [1, 2, 3, 4, 5] → 15

// WRITE YOUR CODE HERE
function sum(arr) {
  return arr.reduce((acc, cv) => acc + cv, 0);
}

console.log(sum(ar));

// Q19. Return only even numbers from an array.
// Example: [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function evenNumber(arr) {
  return arr.filter((a) => a % 2 === 0);
}
console.log(evenNumber(ar));

// Q20. Remove duplicate values from an array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
let ar2 = [1, 2, 2, 3, 4, 4, 5];
function duplicateValue(arr) {
  let remove = [];
  return arr.reduce((acc, cv) => {
    if (!acc.includes(cv)) {
      remove.push(cv);
    }
    return remove;
  }, []);
}
console.log(duplicateValue(ar2));

// ==========================================
// BONUS: STUDENT MARKS CALCULATOR
// ==========================================

// Input: [50, 60, 70, 80, 90]
// Expected output:
// Highest Marks: 90
// Lowest Marks: 50
// Average Marks: 70
// Total Marks: 350

// WRITE YOUR CODE HERE

// BONUS: STUDENT MARKS CALCULATOR


function calculateMarks(marks) {
  const total = marks.reduce((acc, cv) => acc + cv, 0);

  const highest = marks.reduce((acc, cv) => {
    return acc > cv ? acc : cv;
  });

  const lowest = marks.reduce((acc, cv) => {
    return acc < cv ? acc : cv;
  });

  const average = total / marks.length;

  console.log("Highest Marks:", highest);
  console.log("Lowest Marks:", lowest);
  console.log("Average Marks:", average);
  console.log("Total Marks:", total);
}

calculateMarks([50, 60, 70, 80, 90]);
