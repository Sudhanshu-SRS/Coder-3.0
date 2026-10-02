let rn=45
let guess=null
let attemp=0




while(guess!==rn){
let input=prompt("Enter the number ")
guess=Number(input)

if(guess>rn){
    console.log("guess is too high");
}
else if(guess<rn){
    console.log("Guess Is Too Low");
}
else{
    console.log("You Guess the coreect number");
}

}