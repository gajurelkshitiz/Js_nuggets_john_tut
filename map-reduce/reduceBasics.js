/* 
    array.reduce(callback, initialValue)
      >> callback: a function that runs for each element of the array
      >> initialValue: The starting vlaue for the reduction

    callback(accumulator, currentValue, index, array)
      >> accumulator: carries the result of previous steps
      >> currentValue: the current element being processed
      >> index: the index of the current element
      >> array: the whole array(rarely used)
*/



/*
// Sum of numbers

const numbers = [1,2,3,4];

const sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log(sum);
*/




/*
// Find Maximum Number

const nums = [5,9,3,7,2];

const maxNum = nums.reduce((acc, curr) => {
    return curr>acc ? curr : acc;
}, nums[0])

console.log(maxNum);
*/





/*
// Count Occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})

console.log(count);
*/



/*
// Flatten an Array
const arr = [[1,2], [3,4], [5]];

const flat = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
*/



