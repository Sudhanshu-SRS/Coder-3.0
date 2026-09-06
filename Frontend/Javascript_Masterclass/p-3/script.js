// 1
console.log(x);
var x = 5;

// 2
foo();
function foo() { console.log("called"); }

// 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// 4
function make() {
  let secret = "hidden";
  return () => secret;
}
const reveal = make();
console.log(reveal());