// filter is basically doing filter in js.



const arr = [5,1,3,2,6];


/*
// general way of writing function:
function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}

function greaterThan4(x) {
    return x > 4
}

console.log(arr.filter(isOdd));

console.log(arr.filter(greaterThan4));
*/



// some other way of writing filter functions :

const output = arr.filter(function (a) {
    return a % 2;
})
console.log(output);