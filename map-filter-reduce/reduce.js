const arr = [5,1,3,2,6]

/*
// <------------- sum  ------------------->

// [########] function way:
function findSum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

console.log(findSum(arr));


// reduce:
const value = arr.reduce(function(acc, curr) {
    acc += curr
    return acc
}, 0)

console.log(value);
*/



/*
// <---------------  max ----------------->


// [########] function way:
function maxNumber(arr) {
    let max = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

const maxNo = maxNumber(arr)
console.log(maxNo);


// reduce
const value = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }
    return acc
}, 0)

console.log(value);

*/