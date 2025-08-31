// <------------ REQUIREMENTS HERE ----------->


// after 1s first red;
// after 3s second blue;
// after 2s third green;
// IN SEQUENCE;



const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');


// <---------- For testing purpose ------------>
// console.log(`first: ${first}`);
// console.log(first.textContent);
// console.log(first.style);
// first.style.color ='red';
// console.log(first.style);

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let counter = 1;
    const counterElement = document.createElement('h2');
    counterElement.textContent = `Counter: ${counter}`;
    document.body.appendChild(counterElement);

    const intervalId = setInterval(() => {
        counter++;
        if (counter > 6) {
            clearInterval(intervalId);
        } else {
            counterElement.textContent = `Counter: ${counter}`;
        }
    }, 1000);

    /*
    // This is not happening is a sequence, what if we need to do it in sequence ??
    setTimeout(() => {
        first.style.color = 'red';
    }, 1000);

    setTimeout(() => {
        second.style.color = 'blue';
    }, 3000);

    setTimeout(() => {
        third.style.color = 'green';
    }, 2000);
    */

    
    
    // In order to do it in sequence: [SYNCHRONOUS]
    setTimeout(() => {
        first.style.color = 'red'
        setTimeout(() => {
            second.style.color = 'blue'
            setTimeout(() => {
                third.style.color = 'green'
            }, 2000);
        }, 3000);
    }, 1000);
})