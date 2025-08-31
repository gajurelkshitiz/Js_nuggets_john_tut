// return 3 times

/*
// Good Old function method
function example(a,b) {
    return function (c,d) {
        return function (e,f) {
            console.log(`a*c*e+b*d*f: ${a}*${c}*${e}+${b}*${d}*${f}`);
            return a*c*e+b*d*f;
        }
    }
}
*/

/*
// anonymos function method:
const example = (a,b) => {
    return (c,d) => {
        return (e,f) => {
            return a*c*e+b*d*f;
        }
    }
}
*/


// this is a correct way of writing anonymos in-line function:
const example = (a,b) => (c,d) => (e,f) => a*c*e+b*d*f

console.log(example(1,2)(3,4)(5,6));
console.log(example(1,2)(1,2)(3,4));
console.log(example(1,2)(0,1)(0,5));