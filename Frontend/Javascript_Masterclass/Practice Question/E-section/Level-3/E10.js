let inventory={
    product:[],

    
addProduct(name,price,stock,category){
   let existing=this.product.find((s)=>s.name===name)
   if(existing) return "Product already Added"

    this.product.push({id:this.product.length+1,name,price,stock,category})
    return "Product Added"

},
sellProduct(name,qty){
  
    let product=this.product.find((prd)=>prd.name===name)
    if(product) {

      if(product.stock<qty){
        return "Sorry we do not have that much stock "
      }

      product.stock=product.stock-qty
       
        return "Congratulation for purchasing "
    }
 return "No Product Found with this name"
},
restockProduct(name,qty){
    let product=this.product.find((prd)=>prd.name===name)
    if(product){
     product.stock=product.stock+qty

        return "Stock Added"
    } 

    return "Product not in store"
},
 findProduct(name){
    return this.product.find((s)=>s.name===name)
 },
getLowStockProducts(){
    return this.product.filter((product)=>product.stock<50)
},
 getProductsByCategory(cat){
    return this.product.filter((product)=>product.category===cat)
 },
 getTotalInventoryValue(){
   return this.product.reduce((total,cproduct)=>{
         return total=total+cproduct.price*cproduct.stock
    },0)
 },
}


// ================================
// ADD PRODUCTS
// ================================

console.log("===== ADD PRODUCTS =====");

console.log(
    inventory.addProduct("Laptop", 55000, 10, "Electronics")
);

console.log(
    inventory.addProduct("Mouse", 800, 50, "Accessories")
);

console.log(
    inventory.addProduct("Keyboard", 1500, 30, "Accessories")
);

console.log(
    inventory.addProduct("Monitor", 12000, 15, "Electronics")
);

console.log(
    inventory.addProduct("Headphones", 2500, 25, "Audio")
);

console.log(
    inventory.addProduct("Office Chair", 8500, 8, "Furniture")
);

console.log(
    inventory.addProduct("Mobile Phone", 30000, 20, "Electronics")
);

console.log(
    inventory.addProduct("USB Cable", 400, 100, "Accessories")
);


// ================================
// CHECK ALL PRODUCTS
// ================================

console.log("===== ALL PRODUCTS =====");

console.log(inventory.product);


// ================================
// DUPLICATE PRODUCT
// ================================

console.log("===== DUPLICATE PRODUCT =====");

console.log(
    inventory.addProduct("Laptop", 55000, 10, "Electronics")
);


// ================================
// FIND PRODUCT
// ================================

console.log("===== FIND PRODUCT =====");

console.log(
    inventory.findProduct("Laptop")
);

console.log(
    inventory.findProduct("Mobile Phone")
);

console.log(
    inventory.findProduct("iPhone")
);


// ================================
// SELL PRODUCT
// ================================

console.log("===== SELL PRODUCT =====");

console.log(
    inventory.sellProduct("USB Cable", 65)
);

console.log(
    inventory.findProduct("USB Cable")
);


// ================================
// TRY SELLING MORE THAN STOCK
// ================================

console.log("===== EXCESS STOCK TEST =====");

console.log(
    inventory.sellProduct("USB Cable", 50)
);


// ================================
// INVALID PRODUCT SALE
// ================================

console.log("===== INVALID PRODUCT SALE =====");

console.log(
    inventory.sellProduct("iPhone", 5)
);


// ================================
// RESTOCK
// ================================

console.log("===== RESTOCK PRODUCT =====");

console.log(
    inventory.restockProduct("USB Cable", 50)
);

console.log(
    inventory.findProduct("USB Cable")
);


// ================================
// RESTOCK INVALID PRODUCT
// ================================

console.log("===== INVALID RESTOCK =====");

console.log(
    inventory.restockProduct("iPhone", 20)
);


// ================================
// LOW STOCK PRODUCTS
// ================================

console.log("===== LOW STOCK PRODUCTS =====");

console.log(
    inventory.getLowStockProducts()
);


// ================================
// PRODUCTS BY CATEGORY
// ================================

console.log("===== ELECTRONICS =====");

console.log(
    inventory.getProductsByCategory("Electronics")
);

console.log("===== ACCESSORIES =====");

console.log(
    inventory.getProductsByCategory("Accessories")
);

console.log("===== AUDIO =====");

console.log(
    inventory.getProductsByCategory("Audio")
);


// ================================
// TOTAL INVENTORY VALUE
// ================================

console.log("===== TOTAL INVENTORY VALUE =====");

console.log(
    inventory.getTotalInventoryValue()
);


// ================================
// FINAL INVENTORY
// ================================

console.log("===== FINAL INVENTORY =====");

console.log(inventory.product);