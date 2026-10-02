// 1. Create object and use Object.keys()
let student = {
    name: "Rahul",
    age: 21,
    course: "MCA",
    city: "Nagpur"
};
console.log(Object.keys(student));



// 2. Use Object.values() on the object
console.log(Object.values(student));
// 3. Use Object.entries() on the object
console.log(Object.entries(student));
// 4. Loop through object using for...in
for(let std in student){
    console.log(std);
}
// 5. Freeze object and test:
//    - update property
//    - add property
//    - delete property
Object.freeze(student)
student.rank=1
console.log(student);
delete student.rank
console.log(student);



// 6. Seal object and test:
//    - update property
//    - add property
//    - delete property
let employee = {
    name: "Amit",
    age: 25
};

Object.seal(employee);

// update
employee.age = 26;

// add
employee.city = "Nagpur";

// delete
delete employee.name;

console.log(employee);

// 7. Create array of user objects
let users = [
    {
        id: 1,
        name: "Rahul",
        age: 22
    },
    {
        id: 2,
        name: "Amit",
        age: 27
    },
    {
        id: 3,
        name: "Sneha",
        age: 24
    },
    {
        id: 4,
        name: "Priya",
        age: 31
    },
    {
        id: 5,
        name: "Akash",
        age: 29
    }
];

// 8. Find user with highest age
let highestAge=users.reduce((acc,cv)=>{
    if(acc.age<cv.age){
        return cv  
    }
    return acc
})
console.log(highestAge);
// 9. Mini TODO:
//    - Add todo
//    - Complete todo
//    - Delete todo
//    - Find todo
//    - Get completed todos
//    - Get incomplete todos

let todoList={
    todo:[],
    addTodo:function(task){
        let existing=this.todo.find((a)=>a.task===task)
        if(existing){
            return "Task Already Exist"
        }
        this.todo.push({id:Date.now(),task,isCompleted:false})
    },
    completeTodo(task){
        let findTask=this.todo.find((a)=>a.task===task)
       
        if(!findTask){
            return "Task Not Found"
        }
        findTask.isCompleted=true
        return "task Completed"
    },
    deleteTodo(task){
        let findTask=this.todo.find((a)=>a.task===task)
        if(!findTask){
            return "Task Not Found"
        } 
        this.todo=this.todo.filter((task1)=>task1.task!==task)
        return "task Delted"
    },
    findTask:function (taskN){
        let findTask=this.todo.find((a)=>a.task===taskN)
        if(!findTask){
            return "Task Not Found"
        } 
        return findTask
    },
    completedTask(){
        return this.todo.filter((a)=>a.isCompleted)

    },
    notCompletedTask(){
        return this.todo.filter((a)=>!a.isCompleted)
    }
}
todoList.addTodo("mera phela task")
todoList.addTodo("mera phela task2")
todoList.addTodo("mera phela task3")
todoList.addTodo("mera phela task4")
console.log(todoList.todo);
console.log(todoList.completeTodo("mera phela task"));
console.log(todoList.todo);
console.log(todoList.deleteTodo("mera phela task2"));
console.log(todoList.todo);
console.log(todoList.findTask("mera phela task2"));
console.log(todoList.findTask("mera phela task"));
console.log(todoList.completedTask());
console.log(todoList.notCompletedTask());
// 10. Shopping Cart:
//    - Add item
//    - Remove item
//    - Calculate total
//    - Update quantity
let ShoppingCart={
    cart:[],
    addshopitem(item,qty,price){
        if(!item||!qty||!price){
            return "All parameter are required"
        }
      let exist=this.cart.find((a)=>a.item===item)
      if(exist){
        return "Item Already Exist"
      }
      this.cart.push({id:Date.now(),item,qty,price})
    },
    removeItem:function(item){
       let exist=this.cart.find((a)=>a.item===item)
      if(!exist){
        return "Item not Exist"
      }  
      this.cart=this.cart.filter((a)=>a.item!==item)
    },
    calculateTotal(item){
         let exist=this.cart.find((a)=>a.item===item)
      if(!exist){
        return "Item Not Exist"
      }  
      let total=exist.qty*exist.price
      return total

    },
    updateQty:function(item,qty){
         let exist=this.cart.find((a)=>a.item===item)
      if(!exist){
        return "Item Not Exist"
      }   
      exist.qty=qty
    }
}
ShoppingCart.addshopitem("Laptop", 2, 60000);
ShoppingCart.addshopitem("Mouse", 3, 800);
ShoppingCart.addshopitem("Keyboard", 1, 1500);

console.log(ShoppingCart.cart);

console.log(ShoppingCart.calculateTotal("Laptop"));

ShoppingCart.updateQty("Mouse", 5);

console.log(ShoppingCart.calculateTotal("Keyboard"));

ShoppingCart.removeItem("Keyboard");

console.log(ShoppingCart.cart);