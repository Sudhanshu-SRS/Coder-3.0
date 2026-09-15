let ShoppingC={
   cart:[],
   addItem(name,price,qty){
    let existing=this.cart.find((a)=>a.name===name)
    if(existing) return "Product already added"
     return this.cart.push({name,price,qty})
   },
   
   finalbill(dis){
    let total=this.cart.reduce((total,cv)=>
    total+(cv.price*cv.qty),0)
    return dis(total)
   }
   


}
function discount(total){
    return total-(total*(10/100))
   }


console.log(ShoppingC.addItem("Laptop", 60000, 1));
console.log(ShoppingC.addItem("Mouse", 1000, 2));
console.log(ShoppingC.addItem("Keyboard", 2000, 1));

console.log(ShoppingC.finalbill(discount));