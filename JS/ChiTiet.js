let tongtien = 0;
document.getElementById('number').addEventListener('input', function() {
    if (this.value < 0) {
        this.value = 0;
        }
});
function buychitiet(button) {
    const productItem = button.closest('.info');
    const name = productItem.querySelector('h1').textContent;
    const number = parseInt(productItem.querySelector('#number').value, 10);
    const priceText = productItem.querySelector('#price').textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);
    const imgSrc = document.getElementById('panel').src;

    const totalItemPrice = price * number;

    const item = document.createElement('li');
    item.classList.add('product');
    item.innerHTML = `
        <img src="${imgSrc}" alt="${name}" width="50px" height="50px" style="border-radius:50%;">
        <p class="info-cart">${name} - ${number} x ${price.toLocaleString()}₫ = ${totalItemPrice.toLocaleString()}₫</p>
        <button class="remove-from-cart"><i class="fa-solid fa-trash-can" style="color: #cf72aa; font-size: 18px;"></i></button>
    `;

    document.getElementById('cart-items').appendChild(item);

    // Hiện form giỏ hàng
    document.getElementById('cart').style.display = 'block';

    // Tính tổng tiền của đơn hàng và cập nhật tongtien
    tongtien += totalItemPrice;
    document.getElementById('total').innerText = `Tổng tiền: ${tongtien.toLocaleString()}₫`;

    // Xóa đơn hàng
    const removeButton = item.querySelector('.remove-from-cart');
    removeButton.addEventListener('click', function() {
        item.remove();
        totalPrice -= totalItemPrice;
        document.getElementById('total').innerText = `Tổng tiền: ${tongtien.toLocaleString()}₫`;
    });
}