const empl = document.querySelector("#employees");
const employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Amit", salary: 35000 },
  { name: "Priya", salary: 75000 },
  { name: "Rohan", salary: 90000 },
];

const fragment = document.createDocumentFragment();

function renderEmployees(emp, threshold) {
  let filemp = emp.filter((a) => a.salary > threshold);

  filemp.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = a.name;
    fragment.appendChild(li);
  });
  empl.appendChild(fragment);
}

renderEmployees(employees, 50000);
