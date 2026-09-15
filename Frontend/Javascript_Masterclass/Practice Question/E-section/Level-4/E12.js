let trasction = [
  { type: "income", amount: 5000 },
  { type: "expense", amount: 1200 },
  { type: "expense", amount: 800 },
  { type: "income", amount: 3000 },
];

function totalIncome() {
  let incomeA = trasction.filter((item) => {
    return item.type === "income";
  });
  return incomeA.reduce((total, CurrentE) => total + CurrentE.amount, 0);
}

function totalExpense() {
  let ExpenseA = trasction.filter((item) => {
    return item.type === "expense";
  });

  return ExpenseA.reduce((total, CurrentE) => total + CurrentE.amount, 0);
}

function balance() {
  let balance = totalIncome() - totalExpense();
  return balance;
}

function largestExpense() {
  let expense = trasction.filter((a) => a.type === "expense");

  let largestE = expense.reduce((total, cv) => {
   if(total.amount > cv.amount){
    return total
   }else{
    return cv
   }
  });
  return largestE.amount;
}
function expenseC() {
  let expense = trasction.filter((a) => a.type === "expense");
  return expense.reduce((total, cv) => {
    return (total = total + 1);
  }, 0);
}

console.log(totalIncome());
console.log(totalExpense());
console.log(balance());
console.log(largestExpense());
console.log(expenseC());
