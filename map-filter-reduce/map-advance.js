const users = [
    { firstname: "akshay", lastName: "saini", age: 26 },
    { firstname: "donald", lastName: "trump", age: 75 },
    { firstname: "elon", lastName: "musk", age: 50 },
    { firstname: "deepika", lastName: "padukone", age: 26 },
]


// map demonstration:
const output = users.map(user => user.firstname + " " + user.lastName)

console.log(output);


// Filter demonstration:

const value = users.filter(user => user.age === 26)
console.log(value);


// we need to show output like : { 26: 2, 75: 1, 50: 1}  [age: count]

const countAge = users.reduce((acc, curr) => {
    const age = curr.age;
    if (age in acc) {
        acc[age] += 1
    }
    else{
        acc[age] = 1
    }
    return acc
}, {})

console.log(countAge);



// first name of all people, whose age is less(<) than 30

const firstNameUnder30 = users
    .filter((user) => user.age < 30)
    .map((user) => user.firstname);

console.log(firstNameUnder30);