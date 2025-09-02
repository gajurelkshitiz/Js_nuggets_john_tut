// Javascript Nuggets


// Timestamps:
console.log(new Date());

// Unix Time:
// January 1, 2020
// 1s = 1000ms



// Date.now()
console.log(Date.now());

// new Date().getTime()
console.log(new Date().getTime());

// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
    console.log(Date.now());
}, 1000)




// #### -------------------- More Detailed ----------------------- ####

let people = []
people = [...people, { id: Date.now(), name: 'peter' }];

setTimeout(() => {
    people = [...people, { id: Date.now(), name: 'john' }];
    console.log(people);
}, 1000);




// create/get dates
console.log(new Date(1756806885910));

const now = Date.now();
console.log('now', now);
const futureDate = new Date( now + 1000*60*60)
console.log('futureDate', futureDate)



// get timestamp
const firstDate = new Date();
const secondDate = new Date(2025, 10, 2);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

const timeDifference = secondValue - firstValue;

console.log('timeDifference', timeDifference);

const minutes = 60 * 1000;

console.log('TimeStamp in Minutes: ', timeDifference/minutes);