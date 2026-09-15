function createCounter(start){
  let value=start//Private
   
  return{
     increment(){
        return value++
     },
     decrement(){
        return value--
     },
     getvalue(){
        return value
     },

     reset(){
        return value=start

     }
     
    }



}

const counter = createCounter(10);

console.log(counter.getvalue());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getvalue());
console.log(counter.reset());
console.log(counter.getvalue());