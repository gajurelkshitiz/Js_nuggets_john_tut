
// Demonstration of Higher Order function:

// And simulating similar to that of standard [map] function in js.

radius = [1,3,5,9,7];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

// const calculate = function (array, logic) {
//     const output = [];
//     for (let i=0; i<array.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// simulating like that of map function
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i=0; i<this.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));


console.log('by map function:');

console.log(radius.map(area));
console.log(radius.map(circumference));


console.log('by array simulated function:');

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));


