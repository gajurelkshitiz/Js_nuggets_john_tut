// Creating a promise:

const cart = ['pant', 'shirt', 'kurtha'];

// Consumer

// whenever consuming any promise, you should gracefully handle the promise, so that the user's page on browser, doesn't go blank.
const promise = createOrder(cart);

console.log(promise);

promise.then(function (orderId) {
    console.log(orderId)
})


// Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {

        // flow of logic here: --> createOrder   ---> validateCart   ---> orderId

        if(!validateCart(cart)){
            const err = new Error('Cart not validated.');
            reject(err);
        }

        const orderId ='dummy1234';

        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }

    })
    
    return pr;
}


// helper functions:
function validateCart(cart) {
    return true;
}

