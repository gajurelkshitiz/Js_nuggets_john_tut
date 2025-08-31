// console.log(multiply(4,5))   ----> 4*5 = 20
// console.log(multiply(1,2,3,5))   -----> 1*2*3*5 = 30
// console.log(multiply(2,0,4,2))  ------> 2+0*4*2 = 16

/*
// this is best for Good Old function
function multiply() {
    const args = [...arguments];
    const result = args.reduce((total, item) => {
        return item ? item * total : item + total
    }, 1)
    return result;
}
*/


// if you want to do for anonymous function, then REST is your Friend
const multiply = (...args) => {
    const result = args.reduce((total, item) => {
        return item ? item * total : item + total
    }, 1);
    return result;
}

console.log(multiply(1,2,3,4))
console.log(multiply(0,1,5,5))