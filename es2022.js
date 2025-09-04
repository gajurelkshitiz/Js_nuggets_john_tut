// ECMAScript 2022


/*
// at() = takes integer and returns the item at the index - string, array

const scores = [99, 90, 100];

const oldLast = scores[scores.length - 1];
console.log(oldLast);

const newList = scores.at(-1);
console.log(newList);

const word = "Javascript Nuggets";
console.log(word.at(3));
console.log(word.at(-2));
*/



// < ------------------------ Next Task ------------------------- >

/*
// for old .then method of resolving promise in js
fetch('https://www.course-api.com/react-tours-project')
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));
*/

// < ------------------------ Next Task ------------------------- >


/*
// async-await function:
const fetchData = async (req, res) => {
    const resp = await fetch('https://www.course-api.com/react-tours-project');
    const data = await resp.json();
    console.log(data);
    }
    
    fetchData();
    */
   

// < ------------------------ Next Task ------------------------- >


   
// Top Level Await - Basic Example :::

const resp = await fetch('https://www.course-api.com/react-tours-project')
const data = await resp.json()
console.log(data);