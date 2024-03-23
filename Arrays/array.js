// Find average marks of an array
let marks = [12, 45, 67, 80, 98];
let sum = 0;
for (let mark of marks) {
  sum += mark;
}
console.log(`Average marks of the class : ${sum / marks.length}`);

// For a given array with price of five items -> [250, 600, 300, 400, 500]. All items have an offer of 10% OFF on them. Change the array to store the final price after applying the offer.

let prices = [250, 600, 300, 400, 500];
let offer = 10 / 100;

for (let i = 0; i < prices.length; i++) {
  let price = prices[i] - prices[i] * offer;
  prices[i] = price;
}
for (let price of prices) {
  console.log(`Prices after applying discount are : ${prices}`);
}

// Create an arrays to store companies -> "Boomerang", "Microsoft", "Uber", "Google", "IBM", "Netflix". Remove the first company, Remove Uber and add Ola in its space, Add amazon at the end

let companies = ['Boomerang', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
companies.shift();
console.log(companies);

let newCompany = companies.splice(1, 1, 'Ola');
console.log(`Deleted item ${newCompany}`);
console.log(companies);

companies.push('Amazon');
console.log(companies);
