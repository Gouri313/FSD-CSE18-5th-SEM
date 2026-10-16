let products = [];

async function loadProducts() {

    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    products = result.products;

    let container = document.getElementById("product-container");

    products.forEach((item) => {

        let card = document.createElement("div");
        card.className = "product-card";

        let img = document.createElement("img");
        img.setAttribute("src", item.thumbnail);
        img.setAttribute("alt", item.title);

        let name = document.createElement("h2");
        name.textContent = item.title;

        let cost = document.createElement("p");
        cost.textContent = "$" + item.price;

        let plus = document.createElement("button");
        plus.textContent = "+";

        let minus = document.createElement("button");
        minus.textContent = "-";

        let addText = document.createElement("span");
        addText.textContent = "ADD ITEM";

        card.append(img, name, cost, plus, minus, addText);

        container.appendChild(card);
    });
}

loadProducts();