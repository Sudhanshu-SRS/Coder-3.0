
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000,
        category: "electronics"
    },
    {
        id: 2,
        name: "Phone",
        price: 25000,
        category: "electronics"
    },
    {
        id: 3,
        name: "Shoes",
        price: 3000,
        category: "fashion"
    },
    {
        id: 4,
        name: "Watch",
        price: 5000,
        category: "accessories"
    }
];


const inp = document.querySelector("#inp");
const productContainer = document.querySelector("#products");
const catButtons = document.querySelectorAll(".cat button");


// ============================
// Render Products
// ============================

function renderProducts(productList) {

    productContainer.innerHTML = "";

    const fragment = document.createDocumentFragment();

    productList.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");

        const h4 = document.createElement("h4");
        h4.textContent = product.name;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `₹${product.price}`;

        const category = document.createElement("span");
        category.classList.add("category");
        category.textContent = product.category;

        div.append(h4, price, category);

        fragment.append(div);
    });

    productContainer.append(fragment);
}


// ============================
// Filter Products
// ============================

function filterProducts(category = "all") {

    const searchText = inp.value.trim().toLowerCase();

    return products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);
        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });
}


// ============================
// Handle Category Buttons
// ============================

catButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.id.toLowerCase();

        const filteredProducts = filterProducts(category);

        renderProducts(filteredProducts);
    });

});


// ============================
// Search
// ============================

inp.addEventListener("input", () => {

    renderProducts(
        filterProducts("all")
    );

});


// ============================
// Initial Render
// ============================

renderProducts(products);

