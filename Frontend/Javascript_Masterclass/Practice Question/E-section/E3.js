function EvenArray(num){
    let EvenArray=num.filter(item => {
        return item%2===0
        
    });

    return EvenArray
}


console.log(EvenArray([22,55,67,88,33,55,666,7777,88888,7777]))