//WRITE YOUR CODE BELOW
var customerOrder = {
    name: "Drink",
    sugars: 3,
    ready: true
};

console.log(customerOrder.name);
console.log(customerOrder.sugars);

if (customerOrder.ready) {
    console.log("Ready for pick-up")
}
else {
    console.log("Still in order queue")
}