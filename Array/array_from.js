// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an interable object
// from - turns array-like/ish into array - string, nodeList, Set


/*
// simple demo
const udemy = 'udemy';

console.log(Array.from(udemy));
*/


/*
//select html elements
const text = document.querySelectorAll('.text')
// console.log(text);

const newText = Array.from(text).find((item) => item.textContent === 'Person');
console.log(newText);
*/



// Pagination features:
const items = Array.from({ length: 120 }, (_, index) => {
    return index;
})
// console.log(items);

const itemPerPage = 14;
const pages = Math.ceil(items.length/itemPerPage);

const newItems = Array.from({length:pages}, (_, index) => {
    const start = index * itemPerPage;
    const tempItems = items.slice(start, start + itemPerPage)
    return tempItems;
})

console.log(newItems);