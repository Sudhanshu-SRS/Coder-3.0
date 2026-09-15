function counter(){
  let count=0
return{ 
    
    increment(){
    count++
    console.log(count);
},
decrement(){
    count--
    console.log(
        count
    );
},
get(){
    return count
    
},

reset(){
    count=0
    console.log("Counter reset");
}

}
}

let countcounter=counter()
countcounter.increment()
countcounter.increment()
countcounter.increment()
countcounter.increment()
countcounter.increment()
countcounter.increment()

countcounter.get()
countcounter.decrement()
countcounter.reset()
countcounter.increment()