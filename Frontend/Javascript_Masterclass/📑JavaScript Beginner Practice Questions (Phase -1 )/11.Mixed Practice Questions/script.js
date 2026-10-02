//Create a mini biodata program using variables and template literals.
let name="sudhanshu"
let age=24
let city="nagpur"
console.log(`Hello My Name IS ${name} I am ${age} year old. And I Am From ${city}`);
//Calculate the area of a rectangle.
let l=14
let b=25
console.log("Area of trainagel is ",l*b);
//Calculate the simple interest.
let p=1000
let r=0.10
let y=4

let Intreset=p*r*y
console.log(Intreset+p);
//Convert temperature from Celsius to Fahrenheit.
temp=32
far=(temp*1.8)+32
console.log("celcius to F",far);
console.log("fahrenheit to C",(far-32)/1.8);
//Convert kilometers into meters
let km=3
let meter
console.log("km to m",meter=km*1000);
console.log("meter to km",meter/1000);
//Calculate total marks and percentage of 5 subjects.
let math=65
let chemistry=75
let physics=89
let bio=95
let pe=87
let total=math+chemistry+physics+bio+pe
let per=total/5
console.log(total,per);
//Calculate electricity bill based on units consumed.
let unit=4
if(unit>10){
    console.log(unit*8);
}
else if(unit>8){
    console.log(unit*6);
}
else if(unit>6){
    console.log(unit*4);
}
else{
    console.log(unit*2);
}
//Create a username generator using first name and birth year.
// Input variables
let firstName = "Alex";
let birthYear = 1998;
let cleanName = firstName.trim().toLowerCase();
let username = cleanName + "_" + birthYear;
console.log("Your generated username is: " + username);
//Check whether a string starts with a specific letter.
console.log(firstName.startsWith("a"));
//Count the total characters in a sentence excluding spaces.
let sentence="Count the total characters in a sentence excluding spaces."

let charcounter=0
for(let char of sentence){
    if(char!==""){
        charcounter++
    }

}

console.log("total number of charter is ",charcounter);
