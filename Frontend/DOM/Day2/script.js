let bulb = document.querySelector(".bulb");
let btn = document.querySelector("#btn");

let currentstatus = true;

btn.addEventListener("click", () => {
  if (currentstatus) {
    bulb.style.backgroundColor = "yellow";
    btn.innerText="off"
    currentstatus=false
  } else {
    bulb.style.backgroundColor = "black";
    btn.innerText="on"
    currentstatus=true
  }
});

console.dir(bulb);
