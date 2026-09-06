let sudhanshu="heello brother"
let vowels="aeiou"
let count=0
let vowelsare=[]
for(let string of sudhanshu){
    if(vowels.includes(string) )
        count++
   
}

console.log(`total Number Of Vowels in your code is ${count}`);

//Optimize by my side to find out word that are vowels

for(let string of sudhanshu){
    if(vowels.includes(string) )
        vowelsare.push(string)
   
}
console.log(vowelsare);