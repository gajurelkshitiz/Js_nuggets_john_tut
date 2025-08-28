/*
// Remove Duplicates from Array:

const numbers = [1,2,2,3,4,4,5];
// using set
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
*/



/*
// Unique Words from a Sentence

const sentence = "hello world hello javascript world";
const uniqueWords = [...new Set(sentence.split(" "))];
console.log(uniqueWords);
*/


/*
// Count Unique Elements
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const uniqueCount = new Set(fruits).size;
console.log(uniqueCount);
*/


/*
// Intersection of Two Arrays (Unique Common Elements)
const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];

const intersection = [...new Set(arr1)].filter(num => arr2.includes(num));
console.log(intersection);
*/


