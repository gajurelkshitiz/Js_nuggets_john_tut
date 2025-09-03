// map function demostration [higher order functions]

const arr = [5, 1, 3, 2, 6, 9];

// Double - [10,2,6,4,12]
// Triple - [15,3,9,6,18]
// Binary - ['101', '1', '11', '10', '110']



/*
// This is one way of doing :::


const double = function (x) {
    return x * 2;
}

const triple = function (x) {
    return x * 3;
}

const binary = function (x) {
    return x.toString(2);
}


console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));

*/


// Another way 

const output = arr.map((x) => x.toString(2));
console.log(output);