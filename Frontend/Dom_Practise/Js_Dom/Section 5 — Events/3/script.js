const frm=document.querySelector("#form")
const inp=document.querySelector("#name")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    val=inp.value
    console.log(val);
})