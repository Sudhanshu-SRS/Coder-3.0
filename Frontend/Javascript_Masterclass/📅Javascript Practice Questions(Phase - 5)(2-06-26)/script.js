// //Question 2 — Simple Callback
// function greet(name) {
//     console.log("Hello", name);
// }

// function welcome(callback) {
//     callback("Sudhanshu");
// }

// welcome(greet);
// //Question 3 — setTimeout with Arguments
// setTimeout(()=>{greet("mansi")},2000)
// let count=setTimeout(()=>{greet("mansi")},5000)
// clearTimeout(count)
// //Question 5 — Countdown Timer
// let time=5
// let s1=setInterval(()=>{
//     console.log(time);
//     time--
//     if(time<1){
//         clearInterval(s1)
//     }
// },1000)
// //Question 6 — Fake API Call
// function fetchUser(callback){
//     console.log("Fetching User....");
//     callback()
// }


// function user(){
//     console.log({
//         id:1,
//         name:"Ritik"
//     });
// }

// fetchUser(user)
// //Question 7 — Create Your First Promise
// let Fp=new Promise((res,rej)=>{
//     let success=true
//     if(success){
//         res("Data Recieved")
//     }else{
//         rej("data rejected")
//     }
// })

// Fp.then((result)=>console.log(result)).catch((error)=>console.log(error))
// //Question 8 — Promise Rejection
// let secondPromise=new Promise((res,rej)=>{
//     let success=false
//     if(success){
//         res("data Recieved")
//     }else{
//         rej("Server Down")
//     }
// })

// secondPromise.then((result)=>console.log(result)).catch((error)=>{console.log(error);})
// //Question 9 — Promise Chaining

// function addNum(num){
//     return new Promise((resolved)=>{
//         resolved(num+10)
//     })
// }

// addNum(0).then((res)=>{
//     console.log(res);
//     return addNum(res)
// }).then((res)=>{
//     console.log(res);
//     return addNum(res)
// }).then((res)=>{
//     console.log(res);
//     return addNum(res)
// })

//Question 10 — Async/Await Conversion
function fetchData(){
    return new Promise((res)=>{
       setTimeout(()=>{ res("Data recived")},2000)
    })
}
async function getUser(){
   try{ const data=await fetchData()
    console.log(data);}
   catch(error){
    console.error(error);
   }
}