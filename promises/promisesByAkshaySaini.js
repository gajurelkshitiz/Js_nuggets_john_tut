// Promises in JS



/*
const cart = ['shoes', 'pants', 'kurta'];


// here i am passing a function to another function, 
// createOrder function ----> will pass entirely the function and `proceedToPayment` function 
// will / won't be handled depends on createOrder itself.

function createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
})


// Promise object attaches the function with its, so once the promise is returned from `createOrder` then
// i will attach the `proceedToPayment` function with it, so that i can handle payment, here the function is
// handler here only on my side.
const promise = createOrder(cart);

promise.then(function(orderId) {
    proceedToPayment(orderId);
});
*/


// < -------------------- EXAMPLE --------------------------->

/*
const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const users = fetch(GITHUB_API);

console.log(users);
*/


// < -------------------- EXAMPLE --------------------------->

// The problem of Callback Hell will be resolved by ===> Chaining Promises.

// Demostration:

const cart = ["shoes", "pants", "kurta"];

// callback hell:
createOrder(cart, function (orderId) {
    
    proceedToPayment(orderId, function(paymentInfo) {

        showOrderSummary(paymentInfo, function() {

            updateWalletBalance();

        })

    }) 

});


// resolve using promise chaining:
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (){
        return updateWalletBalance();
    });

     

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then(() => updateWalletBalance()); 
 



