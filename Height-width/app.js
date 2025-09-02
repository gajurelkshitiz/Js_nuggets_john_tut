// javascript Nuggets

// Width/Height - window, any element
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any elememnt


console.log('height', window.innerHeight);
console.log('width', window.innerWidth);

// console.log(window);


const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
    const dimension = box.getBoundingClientRect();
    console.log(dimension);
})