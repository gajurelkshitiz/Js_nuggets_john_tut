// promises in js

// async await
// consume/use promises


// pending, rejected, fulfilled

const value = 1;
const promise = new Promise((resolve, reject)=>{
    const random = Math.floor(Math.random() * 3);
    if (random === value) {
        resolve('Guessed Correctly');
    }
    else {
        reject('Incorrect prediction');
    }
});
console.log(promise);

promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

