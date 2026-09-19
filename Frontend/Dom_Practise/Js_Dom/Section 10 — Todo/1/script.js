const inp = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#tdlist");
const pending = document.querySelector("#pending");
const completed = document.querySelector("#completed");

let todolist = JSON.parse(localStorage.getItem("todo")) || [];
function savetodo(){
  localStorage.setItem("todo",JSON.stringify(todolist))
}
function viewtask() {
  ul.innerHTML = "";
  const fragment = document.createDocumentFragment();
  todolist.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = `${todo.id}----${todo.task}`;
    if (todo.isCompleted) {
      li.classList.add("complete");
    } else {
      li.classList.add("notcompleted");
    }

    li.addEventListener("click", () => {
      todo.isCompleted = !todo.isCompleted;
      if (todo.isCompleted) {
        li.classList.add("complete");
        li.classList.remove("notcompleted");
        savetodo()
        viewtask()
      } else {
        li.classList.add("notcompleted");
        li.classList.remove("complete");
        savetodo()
        viewtask()
      }
    });
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todolist = todolist.filter((ti) => ti.task !== todo.task);
      savetodo()
      viewtask();
    });
    li.appendChild(deletebtn);
    fragment.appendChild(li);
  });
  ul.appendChild(fragment);
  count();
  inp.value = "";
}

function count() {
  let completedTas = todolist.filter((task) => task.isCompleted).length;
  let notcompleted = todolist.filter((task) => !task.isCompleted).length;
  completed.textContent = `Completed Task:${completedTas}`;
  pending.textContent = `Pending Task:${notcompleted}`;
}

btn.addEventListener("click", (e) => {
  let task = inp.value.toLowerCase();
  if (!task) return;
  let exisitng = todolist.find((task1) => task1.task.toLowerCase() === task);
  if (exisitng) {
    alert("Task Alreay Exist Bitch");
    console.warn("Task ALready Exist");
    return;
  }
  todolist.push({ id: todolist.length + 1, task, isCompleted: false });
 savetodo()
  viewtask();
});

viewtask();
