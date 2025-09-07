// Creating a promise:

// Promise chaining:


// TODO:whenever you are chaining, we always need to return down the chain, else we will fall into a error, that a new programmer can never track.

const cart = ['pant', 'shirt', 'kurtha'];
 
// Consumer

// whenever consuming any promise, you should gracefully handle the promise, so that the user's page on browser, doesn't go blank.


/*
    DISCUSSION ON CHAINING AND ADVANCED ERROR HANDLING:

    -> if there is a final `catch` in the promise chain, then the catch will definitely be called, whenever and .then() function
        before it, returns a error.
    -> just for an example: 
            if you have a chain as:
                    function() {
                        .then()
                        .then()
                        .then()
                        .catch()
                    }

            if you want to handle the error for just first step only, and then run the code even though encountered error in the first step,
              then, you need to write the promise object as:
                    function() {
                        .then()
                        .catch()    //this will catch error to previous then only

                        .then()     //even error, in prev step. This will execute
                        .then()
                        .catch()    // this is a final catch, for overall error, in the flow
                    }
*/

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
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

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    })
}


// helper functions:
function validateCart(cart) {
    return true;
    // return false; // to check the reject function of promise.
}

