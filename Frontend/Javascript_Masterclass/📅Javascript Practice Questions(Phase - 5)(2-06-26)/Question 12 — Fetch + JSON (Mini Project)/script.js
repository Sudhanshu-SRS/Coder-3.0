async function getuser(){
    const data =await fetch("https://jsonplaceholder.typicode.com/users/1")
    if(data.ok){
      const res=await data.json()
      const h1=document.createElement("h1")
      h1.textContent=res.name
      document.body.append(h1)
      console.log(h1);
    console.log(res);  
    }else{
        console.log("Url Failed ");
        return
    }
}

getuser()