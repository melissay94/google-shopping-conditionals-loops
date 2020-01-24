// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
// console.log(data.items)

// Next, it's recommended to just look at the first item
const googleItems = data.items;

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?
let count = 0;

for (const item of googleItems) {
    if (item.kind === "shopping#product") {
        count++;
    }
}

console.log(`\nProblem 1: There are ${count} items of kind "shopping#product".\nYou can also get the value of the property "currentItemCount" from the topmost level of the JSON object. \n`);
// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.
const backorders = [];
for (const item of googleItems) {
    let product = item.product;
    for (const type of product.inventories) {
        if (type.availability === "backorder") {
            backorders.push(product.title);
        }
    }
}

console.log(`\nProblem 2: Items on backorder are:\n${backorders.join('\n')}.\n`);

// 3.) Print the `title` all items with more than one image link.
const multiImage = [];
for (const item of googleItems) {
    let product = item.product;
    if (product.images.length > 1) {
        multiImage.push(product.title);
    }
}

console.log(`\nProblem 3: These items have more than one image linked:\n${multiImage.join('\n')}.\n`);

// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!
const canonProducts = [];
for (const item of googleItems) {
    let product = item.product;
    if (product.brand.toLowerCase() === "canon") {
        canonProducts.push(product);
    }
}

const printItems = function(products) {
    for (const product of products) {
        console.log(product);
    }
}

console.log("\nProblem 4: Here are all the Canon brand items:\n");
printItems(canonProducts);

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

const ebayCanonProducts = [];
for (const item of googleItems) {
    let product = item.product;
    if (product.brand.toLowerCase() === "canon" && (product.author.name.toLowerCase()).includes("ebay")) {
        ebayCanonProducts.push(product);
    }
}

console.log('\nProblem 5: Here are all the Canon brand items from Ebay:\n')
printItems(ebayCanonProducts);

// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.
console.log('\nProblem 6:\n');

for (const item of googleItems) {
    let product = item.product;
    let brand = product.brand;
    let price = product.inventories[0].price;
    let image = product.images[0].link;

    console.log(`It's brand: ${brand}, it's price: ${price}, and an image link: ${image}\n`);
}
