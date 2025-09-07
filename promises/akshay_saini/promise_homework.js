// promise chaining for:
// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet




const cart = ['pant', 'shirt', 'kurta'];


// consumers
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        return paymentInfo;
    })
    .then(function () {
        return showOrderSummary();
    })
    .then(function (orderMsg) {
        console.log(orderMsg);
    })
    .then(function () {
        return updateWallet();
    })
    .then(function (walletInfo) {
        console.log(walletInfo);
    })
    .catch(function (err) {
        console.log(err);
    })




// producers

function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if(!validateCart) {
            const err = new Error("Card is empty");
            reject(err)
        }

        const orderId = generateId();

        if(!orderId) {
            reject(new Error("Order isn't successful."))
        }

        resolve(orderId);
    })
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject){
        resolve(`Payment was sucessful for orderId: ${orderId}`)
    })
}

function showOrderSummary() {
    return new Promise(function(resolve, reject){
        resolve("Order show is this...")
    })
}

function updateWallet() {
    return new Promise(function(resolve, reject){
        resolve('Current Available balance is this...')
    })
}



// helper functions:

function validateCart(cart) {
    if(!cart) {
        return false
    }
    return true
}

function generateId(){
    return Math.random().toString().slice(2, 10);
}