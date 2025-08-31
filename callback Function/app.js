function makeUppercase(value) {
    console.log(value.toUpperCase());
}

// makeUppercase('peter')
function reverseString(value) {
    console.log(value.split(' ').reverse().join(''))
}

function handleName(name, cb) {
    const fullname = `${name} smith`;
    cb(fullname);
}

handleName('peter', makeUppercase);
handleName('peter', reverseString);



const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log("Button Clicked!");
})