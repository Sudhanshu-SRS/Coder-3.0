const box=document.querySelector("#box")
function createElement(){
    const p=document.createElement("p")
    p.innerText="Hello Sudhanshu"
    box.append(p)
}

createElement()