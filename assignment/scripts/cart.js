console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log('Current basket array should be showing as empty: ', basket);

function addItem(item) {
  let newBasket = basket.push(item);

  return true;
}
// console.log(`Basket is now ${newBasket}`);
console.log(addItem('Apples'), basket);
console.log(addItem('Oranges'), basket);
console.log(addItem('Bananas'), basket);


function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
 }
}
console.log(listItems());

function empty() {
  const emptyBasket = basket.slice(basket.length);
  return emptyBasket;
}
console.log('Basket array should be empty: ', empty());
