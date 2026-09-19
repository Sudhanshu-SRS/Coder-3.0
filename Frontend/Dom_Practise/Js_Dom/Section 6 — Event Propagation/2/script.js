const outer=document.querySelector("#outer")
const middle=document.querySelector("#middle")
const inner=document.querySelector("#inner")




outer.addEventListener("click", () => {
    console.log("outer");
});

middle.addEventListener("click", () => {
    console.log("middle");
});

inner.addEventListener("click", () => {
    console.log("inner");
});
