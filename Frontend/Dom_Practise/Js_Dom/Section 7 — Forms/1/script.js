const form=document.querySelector("#from")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    if(e.target.name.value===""||e.target.email.value===""||e.target.psd.value==="")return console.log("All Field Required");
    console.log("Registration succesfull");
})