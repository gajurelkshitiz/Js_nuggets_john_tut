
/*
// Convert Temperature(Celcius -> Fahrenheit)
const celsius = [0,10,20,30]
const fahrenheit = celsius.map((c) => (c * 9/5) + 32 );
console.log(fahrenheit);
*/


/*
// Extract Property from Objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]

const names = users.map((user) => user.name)
console.log(names);
*/


/*
// Format Number (Add $ sign)
const prices = [10, 20, 30];
const formatted = prices.map((price) => `$${price.toFixed(2)}`)
console.log(formatted);
*/


/*
// Double every number;
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number*2);
console.log(doubled);
*/



/*
// capitalize Words
const words = ['hello', 'world', 'javascript'];
const capitalized = words.map((word) => word.toUpperCase())
console.log(capitalized);
*/


/*
// Add a New Property to Objects
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
];

const withTax = products.map((prod) => ({
    ...prod,
    priceWithTax: prod.price *1.13
}));
console.log(withTax);
*/


/*
// Get First Letters (Acronym Example)
const words = ["National", "Aeronautics", "Space", "Admininstration"];
const acronym = words.map(w => w[0]).join('');
console.log(acronym);
*/