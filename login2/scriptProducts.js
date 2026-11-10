const url = ("http://127.0.0.1:5500/products.json"); //url for products.json
let prod = {};

document.addEventListener("DOMContentLoaded", () => {
    blurBackground();
    loadProducts();

    document.querySelector("h1").innerHTML = "Please Select A Product"
})

async function getProducts(url){ 
    console.log("JSON URL: ", url);
    try {

        let fetchPromise = await fetch(url);
        let  data = await fetchPromise.json();
        // console.log("In Try!");
        return data;

    } catch(error) {
        console.log(error.message);
    }
}

function blurBackground() {
    document.getElementById("container")
            .style.backdropFilter = "blur(5px)";
    document.getElementById("header")
            .style.backgroundColor = "rgba(0,0,0,.7)";
    document.getElementById("header")
            .style.backdropFilter = "blur(10px)";
}

async function loadProducts(){

    const data = await getProducts(url);
    const products = data.products;
    prod = products;
    const keys = Object.keys(products);
    // console.log(keys);

    for(let i = 0; i < keys.length; i++){

        product = keys[i];
        description = products[product];
        // console.log(product +": "+ description);

        let div = document.createElement("a");

        div.className = "item";

        div.id = i;

        div.innerHTML = product;

        div.href = "javascript:testClick(" + i + ")";

        console.log(div);

        document.getElementById("products").appendChild(div);
    }
    let divFill = document.createElement("div");
    divFill.innerHTML = "Please Click an Item";
    divFill.className = "itemDesc";

    document.getElementById("descriptions").append(divFill);
    
}

function testClick(index) {
    console.log(document.getElementById(index).innerHTML);

        let key = document.getElementById(index).innerHTML;

        let divDesc = document.createElement("div");

        divDesc.className = "itemDesc";

        divDesc.innerHTML = prod[key];

        document.getElementById("descriptions").replaceChildren(divDesc);
}