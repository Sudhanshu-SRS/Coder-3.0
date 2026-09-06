let secret=Math.floor(Math.random()*100)+1
let attempt=0;
let guess;

do{
guess=Number(prompt("Enter The Number :  "))
attempt++
if(guess>secret) console.log("too High")
else if (guess<secret) console.log("too low")

}while(guess !== secret && attempt<3)

if(guess!== secret) console.log(`You Loose the right number was  ${secret} `)

else console.log(`you got the right number ${secret} in ${attempt} attempts`)