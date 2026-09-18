// let div=document.querySelector("#app")
// let p=document.createElement("p")

// p.textContent="Hello Sudhanshu"
// div.prepend(p)

// let box=document.querySelector("#box")
// box.textContent="Hello World"

// let img=document.querySelector("#photo")
// img.setAttribute("src","photo.jpg")
// img.setAttribute("alt","My Photo")
// let box = document.querySelector("#box");
// box.classList.add("active");
// box.classList.remove("container");
// box.classList.toggle("dark");
// let res = box.classList.contains("active");
// console.log(box, res);

let list = document.querySelector("#list");
const fruit = ["Apple", "Banana", "Mango", "Orange"];

// let Flis=fruit.map((fr) => {
//   const li = document.createElement("li");
//   li.innerText=fr
//  return li
// });

// list.append(...Flis)
// console.log(Flis);
// console.log(...Flis);

const fragment=document.createDocumentFragment()

fruit.forEach((text)=>{
    const li=document.createElement("li")
    li.textContent=text
    li.classList.add("Fruit-list")
     fragment.append(li)
   
})
list.append(fragment)

