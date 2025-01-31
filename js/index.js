// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceXquantity = price.textContent * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = priceXquantity;
  return priceXquantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productRows = document.querySelectorAll('.product');
  const totalValue = document.querySelector('#total-value span');
  let total = 0;
  productRows.forEach((element) => {
    let subtotal = updateSubtotal(element);
    total += subtotal;
  });

  // ITERATION 3
  totalValue.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  console.log(target.closest('tr'));
  target.closest('tr').remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.querySelectorAll('.btn-remove');
  allRemoveButtons.forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
});
