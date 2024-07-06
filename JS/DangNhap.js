function DangNhap() {
    const username = document.getElementById('UserName').value;
    const password = document.getElementById('PassWord').value;

    if (username === '' || password === '') {
        window.alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    } 
    else if (username === "Admin" && password === '123') {
        localStorage.setItem('username', username);
        window.location.href = "http://127.0.0.1:3000/DuAn/MatPetFamily/HTML/DanhMucCho.html";
        return true;
    } 
    else if (username === 'User' && password === '123') {
        localStorage.setItem('username', username);
        window.location.href = "http://127.0.0.1:3000/DuAn/MatPetFamily/HTML/TrangChu.html";
        return true;
    } 
    else {
        window.alert('Tên đăng nhập hoặc mật khẩu không chính xác');
        return false;
    }
}

function displaypass() {
    const passwordField = document.getElementById('PassWord');
    const passToggle = document.getElementById('checkpassword');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passToggle.src = '../IMG/png-transparent-computer-icons-eye-hiding-people-logo-eye-thumbnail.png';
    } else {
        passwordField.type = 'password';
        passToggle.src = '../IMG/65000.png'; 
    }
}
