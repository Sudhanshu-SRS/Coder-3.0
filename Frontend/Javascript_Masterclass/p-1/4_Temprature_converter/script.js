let temp=Number(prompt("Enter The Temperature"))
let unit=prompt("It Is In C or F ??").toLowerCase()



if( unit!=="f" && unit!=="c") {
    console.log("enter the correct degree ");
}

if(unit==="c"){
   let  convertedtemp=(temp*1.8)+32
    console.log(`Your ${temp}Celciuse is converted into Farhenhieght the value is ${convertedtemp}`);
}
else if(unit==="f"){
    let convertedtemp=(temp-32)/1.8
     console.log(`Your ${temp}Farhenhieght is converted into Farhenhieght the value is ${convertedtemp}`);
}