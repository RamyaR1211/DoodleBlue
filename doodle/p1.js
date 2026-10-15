const products = [
  {name: 'Laptop', price: 50000},
  {name: 'Mouse', price: 500},
  {name: 'Keyboard', price: 1500},
  {name: 'Monitor', price: 12000},
  {name: 'Headphones', price: 2000},
];

// 1. Filter products with price greater than 1000
const filteredProducts = products.filter(product => product.price > 1000);
console.log("Filtered products:", filteredProducts);

// 2. Get only the product names
const productNames = filteredProducts.map(product => product.name);
console.log("Product names:", productNames);

// 3. Calculate the total price of those products
const totalPrice = filteredProducts.reduce((total, product) => total + product.price, 0);
console.log("Total price:", totalPrice);