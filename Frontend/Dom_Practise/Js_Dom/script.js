// let ul = document.querySelector("#employees");
// const employees = [
//   { name: "Rahul", salary: 50000 },
//   { name: "Amit", salary: 35000 },
//   { name: "Priya", salary: 75000 },
//   { name: "Rohan", salary: 90000 },
// ];

// function renderEmployees(employees, threshold) {
//   let emp = employees.filter((a) => a.salary > threshold);
//   const emptyfragment = document.createDocumentFragment();

//   emp.forEach((a) => {
//     const li = document.createElement("li");
//     li.textContent = a.name;
//     emptyfragment.appendChild(li);
//   });

//   ul.appendChild(emptyfragment);
// }

// renderEmployees(employees, 40000);

const products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 25000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

let inp = document.querySelector("#search");
let prduct = document.querySelector("#products");

function filterP(prd) {
  return products.filter((a) =>
    a.name.toLowerCase().includes(prd.toLowerCase()),
  );
}

inp.addEventListener("input", (e) => {
  let prodR = filterP(e.target.value);
  prduct.innerHTML = "";
  let fragment = document.createDocumentFragment();
  prodR.forEach((prd) => {
    const li = document.createElement("li");
    li.textContent = `${prd.name}-${prd.price}`;
    fragment.appendChild(li);
  });
  prduct.appendChild(fragment);
  console.log(products);
});
