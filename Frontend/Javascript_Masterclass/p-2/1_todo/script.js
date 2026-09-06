// let TodoList=[]
 
// function Createtodo(task){
//     TodoList.push({
//         id:TodoList.length+1,
//         task:task,
//         iscomplete:false
//     })
// }

// function Completetodo(id){
//     let Todo=TodoList.find((val)=>{ return val.id===id})
//     if(Todo){
//         Todo.iscomplete=true;
//     }
// }

// function removetodo(id){
//     TodoList=TodoList.filter((val)=>{ return val.id!== id})
  
// }


// function showtodo(){
//     return TodoList.map((val)=>{
//         return console.log(`${val.id}.  ${[val.iscomplete?"x":" "]}   ${val.task}`);
//     })
// }

// Createtodo("task 1")
// Createtodo("task 2")
// Createtodo("task 3")
// Completetodo(1)
// removetodo(4)
// showtodo()


// //*Implicit Return
// let Merilist=[]

// function createtodo(task){
//     Merilist.push({
//         id:Merilist.length+1,
//         task:task,
//         completehua:false
//     })
// }

// function completetodo(id){
//     let complete=Merilist.find(e=>e.id===id)
//     if(complete) complete.completehua=true
// }

// function removetodo(id){
//     Merilist=Merilist.filter(e=>e.id!==id)
// }

// function showtodo(){
//     Merilist.map(e=>console.log(`${e.id}.   [${e.completehua?"x":" "}]   ${e.task}`))
// }

// createtodo("task 1")
// createtodo("task 2")
// createtodo("task 3")

// removetodo(2)
// completetodo(1)
// showtodo()






let mytask=[]

function addtask(nawdeto){

  return  mytask.push({id:mytask.length+1,nawdeto:nawdeto,iscomplete:false})
}

function removetask(naaw){
    
}




console.log(addtask("mera phla task"))
console.log(addtask("mera phla task"))
console.log(addtask("mera phla task"))

console.log(mytask[1]);


































