// Q1. Create a function named greet that prints "Hello World".
function greet(){
    console.log("Hello World");
}
greet()

// Q2. Create a function add(a, b) that returns the sum of a and b.
function add(a,b){
    return a+b
}
console.log(add(3,5));
// Q3. Write a function to calculate the square of a number.
function sqr(a){
    return a**a
}
console.log(sqr(4));


// Q4. Create a function that checks whether a number is even or odd.
function checker(a){
    if(a%2===0){
        console.log("Even number");
        return a;
    }
    else{
        console.log("odd Number");
        return a;
    }
}

checker(3)

// Q5. Write a function that converts Celsius to Fahrenheit.
// Formula: Fahrenheit = (Celsius * 9 / 5) + 32
function ctf(c){
    let f=(c*1.8)+32
    return f;
}
console.log(ctf(32));

// Q6. Create a function with a default parameter "Guest".
// If no argument is passed, it should use "Guest".
function def(user="guest"){
console.log("Welcome ",user);
return
}

def()


// Q7. Write a function that returns the greater of two numbers.
function greatchecker(a,b){
    if(a>b){
        console.log("a is greater than b ");
        return
    }
    else{
        console.log("b is greate");
        return
    }
}
greatchecker()

// Q8. Create a function to calculate the area of a rectangle.
// Formula: Area = length * width
function reactangleare(l,b){
    let area=l*b
    console.log("area of rectangele is",area);
    return
}
reactangleare(4,5)


// Q9. Write a function that returns "Adult" if age is 18 or greater,
// otherwise it should return "Minor".
function agec(a){
    if(a>=18){
        console.log("Adult");
        return
    }
    else{
        console.log("Minor");
        return
    }
}


// Q10. Create a function to reverse a string.
// Example: "hello" → "olleh"
function reverse(a){
    let reverse=""
    for(let i=a.length-1;i>=0;i--){
     reverse=reverse+a[i]
    }
    return reverse
}

console.log(reverse("Hello"));