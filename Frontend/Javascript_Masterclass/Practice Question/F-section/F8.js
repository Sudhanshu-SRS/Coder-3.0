async function datapipline(){

   try {
    
     let response=await fetch("https://jsonplaceholder.typicode.com/posts")
     console.log(response);
    if(!response.ok){
        throw new error("Fetch Api HAs PRoblem")
    }
    let data=await response.json()
    let filtered=data.filter((a)=>a.userId==1)
    console.log(filtered);
    let titles=filtered.map((a)=>a.title)
    console.log(titles);
    let totalpost=filtered.reduce((totalpost,currentobj)=>totalpost+1,0)
    console.log(totalpost);


   } catch (error) {
    console.log("Error :",error);
   }




}

datapipline()