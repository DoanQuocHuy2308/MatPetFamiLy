document.getElementById("check-address").addEventListener('change', function() {
    var check = document.getElementById("address-other");
    if (this.checked) {
        check.style.display = 'block';
    } else {
        check.style.display = 'none';
    }
});

function DatHang() {
    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var nametinh = document.getElementById("nametinh").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var chuyenkhoan = document.getElementById("transfer").checked;
    var tienmat = document.getElementById("cash").checked;
    var check = document.getElementById("address-other");
    var first_namekhac = document.getElementById("first-namekhac").value;
    var last_namekhac = document.getElementById("last-namekhac").value;
    var addresskhac = document.getElementById("addresskhac").value;
    var nametinhkhac = document.getElementById("nametinhkhac").value;

    var check_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var check_phone = /^\d{10}$/;

    // Kiểm tra các trường nhập liệu bắt buộc
    if (first_name === "" || last_name === "" || address === "" || nametinh === "" || phone === "" || email === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    // Kiểm tra định dạng email
    if (!check_email.test(email)) {
        alert('Định dạng email không hợp lệ.');
        return;
    }

    // Kiểm tra định dạng số điện thoại
    if (!check_phone.test(phone)) {
        alert('Định dạng số điện thoại không hợp lệ.');
        return;
    }

    if (check.style.display === "block") {
        if (first_namekhac === "" || last_namekhac === "" || addresskhac === "" || nametinhkhac === "") {
            alert("Vui lòng nhập đầy đủ thông tin địa chỉ khác");
            return;
        }
    }

    // Kiểm tra phương thức thanh toán
    if (!chuyenkhoan && !tienmat) {
        alert('Vui lòng chọn phương thức thanh toán.');
        return;
    }

    // Nếu các điều kiện đều hợp lệ, thông báo "Đặt hàng thành công" và chuyển hướng trang
    alert("Đặt hàng thành công");
    window.location.href = "http://127.0.0.1:3000/DuAn/MatPetFamily/HTML/TrangChu.html";.
}
