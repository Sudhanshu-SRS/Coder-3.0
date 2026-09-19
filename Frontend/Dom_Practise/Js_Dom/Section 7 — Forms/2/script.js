const inp=document.querySelector("#username")
const preview=document.querySelector("#preview")
inp.addEventListener("input",(e)=>{
    preview.textContent=e.target.value
   
})