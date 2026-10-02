// ============================================================
// 1. Array
// ============================================================

// Q1. Create an array of 5 favorite movies and print all values.
// Hint: Use indexing
let favmovie=["toonpurkasuperhero","tarzan","jumanji","yo ","dfpojnsdfgns"]
for(let i=0;i<favmovie.length;i++){
    console.log(favmovie[i])
}
// Q2. Create an array containing numbers, strings, boolean,
// and another array. Print only the nested array value.
// Hint: Mixed data types + nested indexing

// ============================================================
// 2. Indexing in Array
// ============================================================

let arr2=[1,true,"sudhanshu",[1,2,34,54,65]]
console.log(arr2[3][1]);
// Q3. Print the first and last element of an array.
// Hint: Use 0 and length - 1
console.log(arr2[0]);
console.log(arr2[arr2.length-1]);

// Q4. Swap the second and second-last element using indexing.
// Hint: Use a temporary variable
let b=arr2[3]
let c=arr2[1]
arr2[1]=b
arr2[3]=c
console.log(arr2);

// ============================================================
// 3. Multi-Dimensional Arrays
// ============================================================

// Q5. Create a 2D array and print all first elements of inner arrays.
// Hint: Double indexing
let arr3=[[1,2,3],[4,5,6],[7,8,9]]
for(let i=0;i<arr3.length;i++){
    console.log(arr3[i][0])
}

// Q6. Find the sum of all diagonal elements in a 3x3 matrix.
// Hint: Same row and column index
let arr4=[[1,2,3],[4,5,6],[7,8,9]]
let sum=0   
for(let i=0;i<arr4.length;i++){
    sum+=arr4[i][i]
}
console.log(sum);


// ============================================================
// 4. length
// ============================================================

// Q7. Find the total number of elements in an array.
// Hint: Use .length
console.log(arr2.length);

// Q8. Create a function that checks whether an array length is
// even or odd.
// Hint: Use modulus operator
function checkEvenOrOdd(arr) {
    if (arr.length % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOrOdd(arr2)


// ============================================================
// 5. push()
// ============================================================

// Q9. Add 3 new elements at the end of an array.
// Hint: Use push()
arr2.push(6,7,8)

// Q10. Add elements dynamically inside a loop from another array.
// Hint: Loop + push
let newarr=[]
for(let i=0;i<arr2.length;i++){
    newarr.push(arr2[i])
}
console.log(newarr);
// ============================================================
// 6. pop()
// ============================================================

// Q11. Remove the last element and print the removed value.
// Hint: Store the pop() result
console.log(newarr.pop())

// Q12. Keep removing elements until the array becomes empty.
// Hint: Use while loop
while(newarr.length>0){
    newarr.pop()
}
console.log(newarr);

// ============================================================
// 7. unshift()
// ============================================================

// Q13. Add one username at the beginning of an array.
// Hint: Use unshift()
newarr.unshift("sudhanshu")
console.log(newarr);

// Q14. Insert multiple elements at the beginning without
// replacing existing elements.
// Hint: Multiple arguments
newarr.unshift('a','b','c',...newarr)
console.log(newarr);
// ============================================================
// 8. shift()
// ============================================================

// Q15. Remove the first element from an array.
// Hint: Use shift()
console.log(newarr.shift());
console.log(newarr);

// Q16. Remove the first element repeatedly until only 2
// elements remain.
while(newarr.length>2){
    newarr.shift()
}
console.log(newarr);

// ============================================================
// 9. splice()
// ============================================================

// Q17. Remove 2 elements from the middle of an array.
// Hint: splice(start, deleteCount)
let arr5=[1,2,3,4,5,6,7,8,9,0]
arr5.splice(2,2)
console.log(arr5);
// Q18. Replace 3 middle elements with 5 new values.
// Hint: Use insertion with splice
arr5.splice(2,3,3,4,5)
console.log(arr5);

// ============================================================
// 10. reverse()
// ============================================================

// Q19. Reverse an array using the reverse() method.
// Hint: Use reverse()
arr5.reverse()
console.log(arr5);

// Q20. Reverse only the first half of an array.
// Hint: Manual swapping
arr5=[1,2,3,4,5,6,7,8,9,0]
let mid=Math.floor(arr5.length/2)
for(let i=0;i<mid;i++){
    [arr5[i], arr5[arr5.length-1-i]] = [arr5[arr5.length-1-i], arr5[i]]
}
console.log(arr5);

// ============================================================
// 11. sort()
// ============================================================

// Q21. Sort numbers in ascending order.
// Hint: Compare function
arr5.sort((a,b)=>a-b)

// Q22. Sort an array so even numbers come first and odd numbers later.
// Hint: Custom compare logic
arr5.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return -1;
    if (a % 2 !== 0 && b % 2 === 0) return 1;

    return a - b;
});

console.log("after sort ->", arr5);
// ============================================================
// 12. slice()
// ============================================================

// Q23. Extract the first 4 elements into a new array.
// Hint: Use slice()
const arr8=[1,2,3,4,5,6,7,8,9,0]
let sliced=arr8.slice(0,4)
console.log(sliced);
// Q24. Create a copy excluding the first and last element.
// Hint: Use start and end indexes
const arr = [10, 20, 30, 40, 50, 60];

const result = arr.slice(1, -1);

console.log(result);

// ============================================================
// 13. concat()
// ============================================================

// Q25. Merge two arrays.
// Hint: Use concat()
let concat=arr8.concat(arr)
console.log(concat);

// Q26. Merge 3 arrays and remove duplicate values.
// Hint: Combine + loop/includes
let a1=[1,2,3,4,5,6]
let a2=[1,3,5,7,8,9]
let a3=[1,3,5,7,9,12]

let combine=a1.concat(a2,a3)
let resu=[]
combine.forEach((value)=>{
    if(!resu.includes(value)){
        resu.push(value)
    }
})
console.log(resu);

// ============================================================
// 14. includes()
// ============================================================

// Q27. Check whether "apple" exists in an array.
// Hint: Use boolean result
let fruits = ["banana", "orange", "apple", "mango"];
console.log(fruits.includes("apple"));

// Q28. Check if all elements of one array exist inside another.
// Hint: Loop + includes
let fruits1=["banana", "orange", "apple", "mango"];



let result1 = fruits1.every((a) => {
    return fruits.includes(a);
});

console.log(result1); // true

// ============================================================
// 15. indexOf()
// ============================================================

// Q29. Find the index of "Rahul" in an array.
// Hint: Use indexOf()
let name=["sudhanshu","mansi","rahul","pranay"]
console.log(name.indexOf("rahul"));

// Q30. Find all positions of the repeated number 5.
// Hint: Loop through the entire array
let arr54 = [2, 5, 8, 5, 3, 5, 9, 1, 5];

let result2=[]
arr54.forEach((a,i)=>{
  if(a===5){
       return result2.push(i)
    }

})
console.log(result2);

// ============================================================
// 16. join()
// ============================================================

// Q31. Convert an array into a comma-separated string.
// Hint: Use join(",")
let arr31 = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let res31=arr31.join(",")
console.log(res31);
// Q32. Convert an array into a sentence format.
// Hint: Join with spaces
let arr32 = ["I", "am", "learning", "JavaScript", "and", "React"];
let res32=arr32.join(" ")
console.log(res32);
// ============================================================
// 17. for loop
// ============================================================

// Q33. Print all array elements using a for loop.
// Hint: Loop through indexes
let arr33 = [10, 20, 30, 40, 50, 60];
for(let i=0;i<arr33.length;i++){
 console.log(arr33[i]);
}

// Q34. Print elements at only even indexes.
// Hint: Increase the loop smartly
let arr34 = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];
for(let i=0;i<arr34.length;i++){
    if(i%2===0){
        console.log(arr34[i]);
    }
}
// ============================================================
// 18. for...of
// ============================================================

// Q35. Print all values using for...of.
// Hint: Direct value iteration
let arr35 = [100, 200, 300, 400, 500];
for(let elem of arr35){
    console.log(elem);
}

// Q36. Count vowels from an array of characters.
// Hint: Use conditions inside the loop
let arr36 = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
let count=0
let count1=0
arr36.forEach((a)=>{
    if(a.includes("a","e","i","o","u")||a.includes("e")||a.includes("i")||a.includes("o")||a.includes("u")
    ){
count++}
})
for(let char of arr36){
    if("aeiou".includes(char)){
        count1++
    }

    
}


console.log(count,count1);

// ============================================================
// 19. Reference Behaviour of Array
// ============================================================

// Q37. Assign one array to another variable and modify the second one.
// Observe what happens to the original array.
// Hint: Reference behaviour
let arr37 = ["Apple", "Banana", "Mango", "Orange"];
let varr37=arr37
varr37.pop()
console.log(`original->${arr37} copy->${varr37}`);
// Q38. Create a true copy so the original array does not change.
// Hint: Use spread operator
let arr38 = [10, 20, 30, 40, 50];
let vaar38=[...arr38]
vaar38.pop()
console.log(`original->${arr38} copy->${vaar38}`);
// ============================================================
// 20. Spread Operator
// ============================================================

// Q39. Copy an array into a new array.
// Hint: Use ...
let arr39 = ["React", "Node.js", "Express", "MongoDB"];
let varr39=[...arr39]
console.log(`original->${arr39} copy->${varr39}`);

// Q40. Merge arrays and add extra values in between.
// Hint: Combine spread carefully
let arr40a = [10, 20, 30];
let arr40b = [40, 50, 60];
let newarr40=[...arr40a,23,33,445,667,...arr40b]
console.log(newarr40);