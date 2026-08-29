// Math Expression 
let price = 30;
let quantity = 3;

console.log(`Total Price: ${price * quantity} BDT`);

// using Function
function getDiscount(price,percentage){
    let discount =  (price*percentage)/100;
    return price - discount;
}

console.log(`Discount Price: ${getDiscount(1200,20)}`);
