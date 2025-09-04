/*
// simple way 
const heading = document.querySelector('.heading');
console.log(heading);

const listItems = document.querySelectorAll('.list-items');
console.log(listItems);
*/


/*
const getElement = (selector, isList) => {
    if(isList) {
        const elem = [...document.querySelectorAll(selector)];
        if (elem.length < 1) {
            throw new Error(`Please check the selector. ${selector}`)
        }
        return elem;
        
    }
    const elem = document.querySelector(selector);
    if (elem) return elem;
    throw new Error(`Please check the selector.${selector}`)
}
*/


// more simplified way:
const getElement = (selector, isList) => {
    const el = isList 
        ? [...document.querySelectorAll(selector)]
        : document.querySelector(selector)
    
    if(!isList && el) return el;
    if(isList && !el.length < 1) return el;
    throw new Error(`Please check the selector: ${selector}`)
}


console.log(getElement('.list-items', true));
console.log(getElement('.heading'))