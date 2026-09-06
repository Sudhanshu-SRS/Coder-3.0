function Totalcalculator(num){
   let total= num.reduce((Total, current) => {
        return Total+current
    }, 0);

    return total
}

console.log(Totalcalculator([22,55,67,88,33,55,666,7777,88888,7777]))