let ShoppingCart={
 
    item:[],
    addItem(IName,Iqty,IPrice){
        let existing=this.item.find((item)=>item.IName===IName)
        if(existing) return "Item Already Added"
    this.item.push({IName,Iqty,IPrice})
     return "Item Added Succesfully"
    },
    removeItme(Name){
        let Itemcheck=this.item.find((itme)=>itme.IName===Name)
        if(Itemcheck){
            this.item=this.item.filter((item)=>item.IName!==Name)
            return "Item Removed Succesfully"
        }
        return "Item Not FOund In Store"
    },
    finditem(name){
       let productf=this.item.find((itme)=>itme.IName===name)
       if(productf) return productf
       return "product not Found"
    },
    getTotal(...Item){
      
        let Product=this.item.filter((itme)=>Item.includes(itme.IName))

        let total=Product.reduce((total, current) => {
         return   total+(current.IPrice*current.Iqty)
            
        }, 0);

        return total
    }

}

//Adding items
ShoppingCart.addItem("Laptop", 1, 50000);
ShoppingCart.addItem("Mouse", 2, 1000);
ShoppingCart.addItem("Keyboard", 1, 2500);
ShoppingCart.addItem("Monitor", 2, 15000);


//View Item 
console.log(ShoppingCart.item);


//Checking duplicate logic
console.log(
    ShoppingCart.addItem("Laptop", 1, 50000)
);

//working og finditem
console.log(
    ShoppingCart.finditem("Mouse")
);

//worinkg of find item if item not found
console.log(
    ShoppingCart.finditem("Mobile")
);

//working of remove item
console.log(
    ShoppingCart.removeItme("Keyboard")
);

//View Item
console.log(ShoppingCart.item);

//Product not found in remove item
console.log(
    ShoppingCart.removeItme("Mobile")
);

console.log(ShoppingCart.getTotal("Laptop","Mouse"));