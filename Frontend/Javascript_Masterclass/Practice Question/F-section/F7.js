let p1=new Promise((res,rej)=>{
 
    setTimeout(()=>{
     res("Promise 1 Resolved")
     
    },2000)

})


let p2=new Promise((res,rej)=>{
  
    setTimeout(()=>{

    rej("Promise 2 is rejected")
    },3000)
})

let p3=new Promise((res,rej)=>{
  
    setTimeout(()=>{
       res("Promise 3 Resolved ")
    },4000)
})
// Give us the promise which res
Promise.all([p1, p2, p3])
    .then(result => console.log("ALL:", result))
    .catch(error => console.log("ALL ERROR:", error));
// Give us all the  promise 
Promise.allSettled([p1, p2, p3])
    .then(result => console.log("ALL SETTLED:", result));
// Give us the First promise which return result otherwiser of rej or res
Promise.race([p1, p2, p3])
    .then(result => console.log("RACE:", result))
    .catch(error => console.log("RACE ERROR:", error));
// Give us the First promise which return result otherwiser of rej or res
Promise.any([p1, p2, p3])
    .then(result => console.log("ANY:", result))
    .catch(error => console.log("ANY ERROR:", error));