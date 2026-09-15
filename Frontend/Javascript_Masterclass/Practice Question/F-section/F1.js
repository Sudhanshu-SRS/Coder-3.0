const employees = [
    {
        id: 1,
        name: "Rahul",
        salary: 50000,
        department: "IT"
    },
    {
        id: 2,
        name: "Amit",
        salary: 35000,
        department: "HR"
    },
    {
        id: 3,
        name: "Priya",
        salary: 75000,
        department: "IT"
    },
    {
        id: 4,
        name: "Neha",
        salary: 45000,
        department: "Finance"
    },
    {
        id: 5,
        name: "Rohan",
        salary: 90000,
        department: "Management"
    },
    {
        id: 6,
        name: "Sneha",
        salary: 60000,
        department: "Marketing"
    }
];

function findemp(price){

  let emp=employees.filter((a)=>a.salary>price)
  if(emp.length===0) return "No Employess has This Much Salary"
  let totalS=emp.reduce((total,currentv)=>total+currentv.salary,0)
  let averagesalary=totalS/emp.length
  let name=emp.map((a)=>a.name)



  return  {
    EmpName:name,
    totalS,
    averagesalary,
  }

}


console.log(findemp(50000));