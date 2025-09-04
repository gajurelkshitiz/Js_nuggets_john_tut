// Three methods to convert objects into arrays
// Object.keys() = converts property names into array
// Object.values() = converts property values into array
// object.entries() = converts both


const person = {
    name: 'john',
    age: 25,
    status: 'student',
};

const values = Object.values(person);
console.log(values);

const keys = Object.keys(person);
console.log(keys);

const allResult = Object.entries(person);
console.log(allResult);


const newResult = allResult.map((item) => {
    const [first, second] = item;
    return first
})

console.log(newResult);


// for ... of
for (const [first, second] of allResult) {
    console.log(first)
}