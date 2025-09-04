// 'for in' loop - iterate over object properties
// not advised to use it on arrays, especially if the order is important
// on arrays use "for of" loop instead


/*
    Demonstration of 'for...in' vs 'for...of' loops in JavaScript.
    Shows how to iterate over object properties and array elements,
    and explains why 'for...in' is not recommended for arrays.
*/
// for...in --> is for object
const person = {
    name: "john",
    age: 23,
    status: "student",
}

for (const propertyName in person) {
    console.log(`${propertyName} => ${person[propertyName]}`);
}


// for...of --> is for array:
const arr = ['a', 'b', 'c'];
// Using for...in on array (not recommended)
for (const index in arr) {
    console.log(`for...in: index=${index}, value=${arr[index]}`);
}

// Using for...of on array (recommended)
for (const value of arr) {
    console.log(`for...of: value=${value}`);
}

// Why avoid for...in on arrays?
// for...in iterates over all enumerable properties, including custom ones
arr.customProp = 'extra';
for (const index in arr) {
    console.log(`for...in with custom property: index=${index}, value=${arr[index]}`);
}
// for...of only iterates over array values, ignoring custom properties
for (const value of arr) {
    console.log(`for...of ignores custom properties: value=${value}`);
}

console.log(arr);