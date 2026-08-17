let h1=document.querySelector("#id1")



//get attribute it give you attribute in return

let res=h1.getAttribute("id");
console.log(res);

let cres=h1.getAttribute("class")
console.log(cres);

// set Attribute is set the attribute 

h1.setAttribute("background-color","red")

console.log(h1);


// remove Attribute it is used to remove attribute

h1.removeAttribute("background-color")
console.log(h1);

//it return boolen and check wheater it has or not the named attribute
let response=h1.hasAttribute("background-color")
console.log(response);


// Nameing attributes according to html that is creating attributes according to valid html with data-
let h2=document.querySelector("#id2")
let create=h2.getAttribute("data-sudhanshu-create")
console.log(create);
let changed=h2.dataset.SudhanshuCreate="123"
console.log(changed);

