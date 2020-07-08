// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').valueAsNumber;

  const subtotalPrice = parseInt(price) * parseInt(quantity);
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalPrice;

  return subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.getElementsByClassName('product');
  //updateSubtotal(multipleProducts);
  let totalPrice = 0;

  for (let productItem of multipleProducts) {
    let subtotal = updateSubtotal(productItem);
    totalPrice += subtotal;
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document.querySelector('h2 span');
  totalElement.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //console.dir(target);
  const productToRemoveBox = target.parentNode;
  const productToRemoveParentBox = productToRemoveBox.parentNode;
  const productToRemoveParentRow = productToRemoveParentBox.parentNode;
  productToRemoveParentRow.removeChild(productToRemoveParentBox);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');

  for (let removeButton of removeBtn) {
    removeButton.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  //... your code goes here
});
