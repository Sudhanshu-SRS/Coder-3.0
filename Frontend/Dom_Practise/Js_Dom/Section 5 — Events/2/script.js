const parent = document.querySelector("#parent");

parent.addEventListener("click", function (event) {
  console.log(event.target.id);
  console.log(event.currentTarget.id);
});
//see the target give you the element target like chiledren like the parent element has evenelistern so the tharget gives  the inside chil and the current target give us the the element were the eventlistner is attached
