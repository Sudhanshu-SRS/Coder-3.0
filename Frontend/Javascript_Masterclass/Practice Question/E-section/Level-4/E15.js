async function asynchronous(op,maxA){
    let Error
    for(let attempt=1;attempt<=maxA;attempt++){

      try {
        console.log(`Your Attempt is ${attempt}`);
        let result=await op()
        return result
      } catch (error) {
        Error=error
        console.log(`You Faile In Attemp ${attempt}`);
      }
    }

  throw Error


}

let count=0
function operation(){
 count++
 return new Promise((res,rej)=>{
  if(count<3){rej("Bhai Complete nahi hua count")}
  else{
    res("Bhai Count Complete hua ")
  }
 })
}

asynchronous(operation,3).then((result)=>{console.log(result);}).catch((error)=>{console.log(error);})