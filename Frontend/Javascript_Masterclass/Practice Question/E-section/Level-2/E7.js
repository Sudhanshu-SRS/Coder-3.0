let Todo={
  Task:[],
  addTodo(Task){
    let existing =this.Task.find((task)=>task.Tname===Task)
    if(existing) return "Task Already Added"
    this.Task.push({Tname:Task,Iscompleted:false,id:this.Task.length+1})
    return "Task Added Succesfully"
  },

  completeTodo(Task){
   let findT=this.Task.find((task)=>task.id===Task)
   if(findT){
    findT.Iscompleted=true
    return "Task cOMPLETED"
   }
   return "Task Not FOund"
  },
 
 removeTodo(id){
    let tid=this.Task.find((task)=>task.id===id)
    if(tid){
        this.Task=this.Task.filter((task)=>task.id!==id)
        return "Removed succesfully"
    }

    return "Task Not Found"
 },

 getPendingTodos(){
   
    let pending =this.Task.filter((task)=>task.Iscompleted===false)
    return pending

 },

 getCompletedTodos(){
    let completed = this.Task.filter((task)=>task.Iscompleted===true)
    return completed
 }

}


// TEST DATA


console.log(Todo.addTodo("Learn JavaScript"));
console.log(Todo.addTodo("Practice Arrays"));
console.log(Todo.addTodo("Learn Objects"));
console.log(Todo.addTodo("Build Todo App"));
console.log(Todo.addTodo("Practice Functions"));



// CHECK ALL TODOS


console.log("All Todos:");
console.log(Todo.Task);



// DUPLICATE TEST


console.log(Todo.addTodo("Learn JavaScript"));



// COMPLETE TODO TEST


console.log(Todo.completeTodo(2));
console.log(Todo.completeTodo(4));



// CHECK COMPLETED TODOS

console.log("Completed Todos:");
console.log(Todo.getCompletedTodos());


// CHECK PENDING TODOS


console.log("Pending Todos:");
console.log(Todo.getPendingTodos());



// REMOVE TODO TEST


console.log(Todo.removeTodo(3));


// CHECK AFTER REMOVAL


console.log("Todos After Removal:");
console.log(Todo.Task);



// FIND INVALID TODO


console.log(Todo.completeTodo(100));


// REMOVE INVALID TODO


console.log(Todo.removeTodo(100));