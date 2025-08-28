/*
// Object with Dynamic Key
const key = "name";
const value = "alice";

const user = {
    [key]:value
};
console.log(user);
*/




/*
// Dynamic Keys in Loop
const fruits = ["apple", "banana", "orange"];

const fruitObject = {};

fruits.forEach((fruit, index) => {
    fruitObject[`fruit_${index+1}`] = fruit
});
console.log(fruitObject);
*/




/*
// API Response Transformation

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const userMap = users.reduce((acc, curr) => {
    acc[`user_${curr.id}`] = curr
    return acc
}, {})

console.log(userMap);
*/





// Use Variable as Object Key:
function createSettings(option, value) {
    return {
        [option]: value
    };
}

console.log(createSettings("theme", "dark"));
console.log(createSettings("language", "en"));

