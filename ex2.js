const ship={ shippingAddress: {id: 27, fullName: 'Sam', phone: '1234567', address: 'hanoi', city: 'hanoi'}}
const cart ={
itemsPrice: 148,
orderItems: {},
paymentMethod: "PayPal",
shippingAddress: {fullName: 'Sam', address: 'hanoi', phone: '1234567', city: 'hanoi'},
shippingPrice: 0,
taxPrice: 14.8,
totalPrice: 162.8,}

const result ={...ship, ...cart}
console.log(ship)
console.log(result)