let num=5
if(num>=0){
    console.log("positive");
}else{
    console.log("Negative");
}

if(num%2===0){
    console.log("Even");
}
else{
    console.log("odd");
}

let age=18
if(age>=18){
    console.log("eligible to vote");

}else{
    console.log("not eligible to vote");
}

let num1=5
let num2=8
if(num1>=num2&&num2<=num1){
    console.log("num1 is grater");
}
else{
    console.log("num2 is greater");
}

let num3=10
if(num1>num2&&num1>num3){
    console.log(`${num1} is greater`);
}
else if(num2>=num1&&num2>=num3){
    console.log(`${num2} is greater`);
}
else{
    console.log(`${num3} is greater`);
}

let year=2002
if((year%4===0&& tear%100!=0)||year%400===0){
    console.log("leap year"
    );
}else{
    console.log("not leap year");
}

if(num%3===0&&num%5==0){
    console.log("num is divisible of 3 & 5");
}
else{
    console.log("num is not divisible of 3 & 5");
}

let mark=80
if(mark>=90){
    console.log("a");
}
else if(mark>=75){
    console.log("B");
}
else if(mark>=50){
    console.log("c");
}
else{
    console.log("fail");
}

let word="sudhanshu";
let chr=word.toLowerCase()
if(chr==='a'||chr==='e'||chr==='i'||chr==='o'||chr==='u'){
    console.log("vowel");
}
else if(chr>='a'&&chr<='z'){
    console.log("consonant");
}   
else{
    console.log("not a alphabet");
}

let key="+"

switch (key) {
    case "+":console.log(num1+num2)
        break;
    case "-": num1-num2  
             break;
    case "*": num1*num2  
             break;
    case "/": num1/num2  
             break;
    case "%": num1%num2  
             break;                           
    default:
        break;
}

let day=1
switch (day) {
    case 1:
        console.log("monday");
        
        break;
         case 2:
        console.log("tuesday");
        
        break;
         case 3:
        console.log("wednesday");
        
        break;
         case 4:
        console.log("thursday");
        
        break;
         case 5:
        console.log("friday");
        
        break;
         case 6:
        console.log("saturday");
        
        break;
         case 7:
        console.log("sunday");
        

    default:
        console.log(`day based on you key ${day}`);
        break;
}

let usernam="admin"
let pass="1234"
if(usernam==="admin"&&pass==="1234"){
    console.log("welcome Admin");
}else{
    console.log("unauthroized");
}