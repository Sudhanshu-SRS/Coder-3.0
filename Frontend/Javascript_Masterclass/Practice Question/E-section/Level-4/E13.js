const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000,
        category: "electronics",
        details: {
            brand: "Dell",
            stock: 5
        }
    },
    {
        id: 2,
        name: "Phone",
        price: 25000,
        category: "electronics",
        details: {
            brand: "Samsung",
            stock: 10
        }
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        category: "electronics",
        details: {
            brand: "Sony",
            stock: 15
        }
    },
    {
        id: 4,
        name: "Shoes",
        price: 3000,
        category: "fashion",
        details: {
            brand: "Nike",
            stock: 8
        }
    },
    {
        id: 5,
        name: "T-Shirt",
        price: 800,
        category: "fashion",
        details: {
            brand: "Puma",
            stock: 20
        }
    },
    {
        id: 6,
        name: "Watch",
        price: 5000,
        category: "accessories",
        details: {
            brand: "Titan",
            stock: 6
        }
    }
];

function findProduct(cat){
    let product=products.filter((productC)=>productC.category===cat)
   return product
}
function cheapProduct(){
    let Product=products.reduce((cheapproduct,currentproduct)=>{
        if(cheapproduct.price<currentproduct.price){
            return cheapproduct
        }
        else{
            return currentproduct
        }
    })
    
  return Product

}


function categoryTotal(cat){
  let Cproduct= products.filter((ct)=>ct.category===cat)

  return Cproduct.reduce((totalC,CurrenC)=>totalC+CurrenC.price,0

)


}

function prductname(cat){

    let product=products.filter((a)=>a.category===cat)
    if(product.length>0){
        return product.map((a)=>a.name)
    }
    
    return "Product with This Category Not Vailiabel"
}




console.log(findProduct("fashion"));
console.log(cheapProduct());
console.log(categoryTotal("fashion"));
console.log(prductname("fashion"));