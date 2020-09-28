import {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const confButton = document.querySelector('#confirmButton');
const qtyInput = document.querySelector('#qty');
const codeInput = document.querySelector('#code');
const subTotal = document.querySelector('#subtotal');
const price = document.querySelector('#price');

window.addEventListener('load', () => {
  subTotal.textContent = recalculateSubtotal(price.value, qtyInput.value, codeInput.value);
});

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = recalculateSubtotal(price.value, qtyInput.value, codeInput.value);
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = recalculateSubtotal(price.value, qtyInput.value, codeInput.value);
});

price.addEventListener('change', () => {
  subTotal.textContent = recalculateSubtotal(price.value, qtyInput.value, codeInput.value);
});

price.addEventListener('keyup', () => {
  subTotal.textContent = recalculateSubtotal(price.value, qtyInput.value, codeInput.value);
});

confButton.addEventListener('click', () => {
  subTotal.textContent = recalculateSubtotal(price.value, qtyInput.value, codeInput.value);
});