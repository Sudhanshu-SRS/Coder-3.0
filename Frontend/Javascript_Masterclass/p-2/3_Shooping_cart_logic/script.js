let shoplist = [];

function addshopitem(name, qty = 1, price) {
  let phelwalaproduct = shoplist.find((val) => {
    return val.name === name;
  });

  if (phelwalaproduct) {
    return (phelwalaproduct.qty += qty);
  } else {
    return shoplist.push({ name, qty, price });
  }
}

function removeitem(id) {
  return (shoplist = shoplist.filter((e) => e.name !== id));
}
function showtotal() {
 return shoplist.reduce((sum, a) => sum += a.price * a.qty, 0);
}
function showitem() {
  for (let shop of shoplist) {
   console.log(
      `${shop.name} X ${shop.qty} === ${shop.qty * shop.price}`,
    );
    
  }
console.log(`your Total is ${showtotal()}`);
  
}

addshopitem("iphone", 3, 200);
addshopitem("iphone", 4, 200);
addshopitem("my ohone",5,500)
showitem();

