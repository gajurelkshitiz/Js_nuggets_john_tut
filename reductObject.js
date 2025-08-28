// for displaying the cart total dynamically:

const cart = [
    {
        title: "Samsung Galaxy S7",
        price: 599.99,
        amount: 1,
    },
    {
        title: "Google Pixel",
        price: 499.99,
        amount: 2,
    },
    {
        title: "Xiaomi Redmi Note 9",
        price: 699.99,
        amount: 4
    },
    {
        title: "xiaomi Redmi Note 13",
        price: 399.99,
        amount: 3,
    }
]


const {totalItem, cartTotal} = cart.reduce((total, cartItem) => {
    const {amount, price} = cartItem;
    // count total items
    total.totalItem += amount 
    // calculate total price:
    total.cartTotal += amount * price
    return total
}, {
    totalItem: 0,
    cartTotal: 0
})

console.log(totalItem, parseFloat(cartTotal.toFixed(2)));
