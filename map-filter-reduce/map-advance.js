const users = [
    { firstname: "akshay", lastName: "saini", age: 26 },
    { firstname: "donald", lastName: "trump", age: 75 },
    { firstname: "elon", lastName: "musk", age: 50 },
    { firstname: "deepika", lastName: "padukone", age: 26 },
]

const output = users.map(user => user.firstname + " " + user.lastName)

console.log(output);