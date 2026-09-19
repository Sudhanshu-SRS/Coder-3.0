const ul=document.querySelector("#list")
const fruits=["Apple","Banana","Mango","Orange"]

const fragment=document.createDocumentFragment()
fruits.forEach((a)=>{
  const li=document.createElement("li")
  li.textContent=a
  fragment.appendChild(li)
})

ul.appendChild(fragment)