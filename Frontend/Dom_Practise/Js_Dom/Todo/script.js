let inp = document.querySelector("#task");
let ul = document.querySelector("#tasklist");
const task = [];
inp.addEventListener("input", (e) => {
 

});

function addTask(name) {
  task.push({ id: task.length + 1, task: name, completed: false });
}
