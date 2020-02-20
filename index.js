var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 
 var itemToInsert = {itemName:item, itemPrice: Math.ceil(Math.random() * 100)};
 cart.push(itemToInsert);
}

function viewCart() {
  // write your code here
  if(cart.length > 0)
    {
      
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
