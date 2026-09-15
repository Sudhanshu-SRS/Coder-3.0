let todo = {
  todot: JSON.parse(localStorage.getItem("todo")) || [],
  addtask(name) {
    let existing = this.todot.find((a) => a.task === name);
    if (existing) return "Already Added";
    this.todot.push({
      id: this.todot.length + 1,
      task: name,
      iscompleted: false,
    });
    localStorage.setItem("todo", JSON.stringify(this.todot));
  },
  removetask(name) {
    this.todot = this.todot.filter((a) => a.task !== name);
    localStorage.setItem("todo", JSON.stringify(this.todot));
  },
  completetask(name) {
    let existing = this.todot.find((a) => a.name === name);
    if (existing) return "Task Not Found";
    this.todot = this.todot.map((taskT) => {
      if (taskT.task === name) {
        return {
          ...taskT,
          iscompleted: true,
        };
      }
      return taskT;
    });
    localStorage.setItem("todo",JSON.stringify(this.todot));
  },
};

todo.addtask("sudhanshu");
todo.addtask("mansi");
todo.removetask("mansi");
todo.completetask("sudhanshu");
