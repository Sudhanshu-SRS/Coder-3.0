const inp=document.querySelector("#search")
const ul=document.querySelector("#products")
const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 25000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
inp.addEventListener("input",(e)=>{
let fp=products.filter((prd)=>prd.name.toLowerCase().includes(e.target.value.toLowerCase()))
console.log(fp);
const fragment=document.createDocumentFragment()
fp.forEach((a)=>{
    const li=document.createElement("li")
    li.textContent=`${a.name}  --- ${a.price}`
    fragment.appendChild(li)
})
ul.innerHTML=""
ul.appendChild(fragment)
})

