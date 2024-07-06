const cart = document.getElementById('cart-items');
let totalPrice = 0;

function buy(button) {
  const productItem = button.closest('.product-iteam');
  const name = productItem.querySelector('.product-info h3 a').textContent;
  const priceText = productItem.querySelector('.product-info p').textContent;
  const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);
  const imgSrc = productItem.querySelector('.product-thumb-img img').src;

  const item = document.createElement('li');
  item.classList.add('product');
  item.innerHTML = `
    <img src="${imgSrc}" alt="${name}" width="50px" height="50px" style="border-radius:50%;">
    <p class="info-cart">${name} - ${price.toLocaleString()}₫</p>
    <button class="remove-from-cart"><i class="fa-solid fa-trash-can" style="color: #cf72aa; font-size: 18px;"></i></button>
  `;

  cart.appendChild(item);

// hiện form giỏ hàng
  document.getElementById('cart').style.display = 'block';

  // tính tổng tiền của đơn hàng
  totalPrice += price;
  document.getElementById('total').innerText = `Tổng tiền: ${totalPrice.toLocaleString()}₫`;

  // xóa đơn hàng
  const removeButton = item.querySelector('.remove-from-cart');
  removeButton.addEventListener('click', function() {
    item.remove();
    totalPrice -= price;
    document.getElementById('total').innerText = `Tổng tiền: ${totalPrice.toLocaleString()}₫`;
  });
}

/* thanh toán đơn hàng */
function ThanhToan() {
  window.location.href = "http://127.0.0.1:3000/DuAn/MatPetFamily/HTML/ThanhToan.html";
  return true;
}

/* đóng form đơn hàng */
function dongform() {
  document.getElementById('cart').style.display = 'none';
}

/* hiện form Cart */
function Cart() {
  document.getElementById('cart').style.display = 'block';
}
