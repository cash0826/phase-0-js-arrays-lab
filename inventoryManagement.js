// Write your code here
const products = ['Laptop', 'Phones', 'Headphones', 'Monitor'];

//Write a function called logFirstProduct to console log the details of the first product in the array.
function logFirstProduct() {
  console.log(products[0]);
}

//Write a function called addProduct to add a new product to the array. This function should take the product name as an argument.
function addProduct(productName) {
  products.push(productName);
}

//Write a function called updateProductName to change the name of a product. 
//This function should take the product's position in the array and the new name as arguments.
function updateProductName(position, newName) {
  products[position] = newName;
  return products;
  }

//Write a function called removeLastProduct to remove the last product from the array.
function removeLastProduct() {
    products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
