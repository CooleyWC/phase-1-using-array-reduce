const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

/* 

practice example below: 
const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];


let total = products.reduce(function(acc, product){
  return acc + product.price;
}, 100);
console.log(total)
*/

const totalBatteries = batteryBatches.reduce(function(acc, element){
  return acc + element;
})