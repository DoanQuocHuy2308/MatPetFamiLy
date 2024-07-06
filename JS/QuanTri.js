document.getElementById('Name').innerText = "Welcome: " + localStorage.getItem('username');

function ThemDuLieu() {
    document.getElementById('formthemdulieu').style.display = 'block';
}

function dongform() {
    document.getElementById('formthemdulieu').style.display = 'none';
}

function add(button) {
    event.preventDefault();

    const STT = document.getElementById('STT').value;
    const Ten = document.getElementById('Ten').value;
    const DanhMuc = document.getElementById('DanhMuc').value;
    const SoLuong = document.getElementById('SoLuong').value;
    const Gia = document.getElementById('Gia').value;
    const IMG = document.getElementById('IMG').files[0];

    var check_number = /^\d+$/;
    var check_gia = /^\d{1,3}(?:[,.]\d{3})*(?:[,.]\d{1,2})?$/

    if (STT === '' || Ten === '' || DanhMuc === '' || SoLuong === '' || Gia === '' || !IMG) {
        window.alert('Vui lòng không được để trống');
        return;
    }

    if (!check_number.test(SoLuong)) {
        alert("Vui lòng nhập đúng định dạng số lượng");
        return;
    }

    if (!check_gia.test(Gia)) {
        alert("Vui lòng nhập đúng định dạng giá tiền");
        return;
    }

    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const STTCell = newRow.insertCell(0);
    const TenCell = newRow.insertCell(1);
    const DanhMucCell = newRow.insertCell(2);
    const SoLuongCell = newRow.insertCell(3);
    const GiaCell = newRow.insertCell(4);
    const IMGCell = newRow.insertCell(5);
    const UpdateCell = newRow.insertCell(6);
    const DeleteCell = newRow.insertCell(7);

    STTCell.textContent = STT;
    TenCell.textContent = Ten;
    DanhMucCell.textContent = DanhMuc;
    SoLuongCell.textContent = SoLuong;
    GiaCell.textContent = Gia;

    if (IMG) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(IMG);
        img.width = 100;
        IMGCell.appendChild(img);
    } else {
        IMGCell.textContent = 'Không có ảnh';
    }

    UpdateCell.innerHTML = '<button type="button" onclick="Update(this)"><i class="fa-regular fa-pen-to-square"></i></button>';
    DeleteCell.innerHTML = '<button type="button" onclick="Delete(this)"><i class="fa-solid fa-trash-can"></i></button>';
    
    document.getElementById('form').reset();
    dongform();
}

function Delete(button) {
    const row = button.closest('tr');
    row.remove();
}

function Update(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');

    cells[1].innerHTML = `<input type="text" value="${cells[1].innerText}">`;
    cells[2].innerHTML = `<input type="text" value="${cells[2].innerText}">`;
    cells[3].innerHTML = `<input type="text" value="${cells[3].innerText}">`;
    cells[4].innerHTML = `<input type="text" value="${cells[4].innerText}">`;
    cells[6].innerHTML = `<button type="button" onclick="SaveRow(this)"><i class="fa-solid fa-check fa-fw"></i></button>`;
}

function SaveRow(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');

    const newTen = cells[1].querySelector('input').value;
    const newDanhMuc = cells[2].querySelector('input').value;
    const newSoLuong = cells[3].querySelector('input').value;
    const newGia = cells[4].querySelector('input').value;

    var check_number = /^\d+$/;
    var check_gia = /^\d{1,3}(,\d{3})*(\.\d{0,2})?$/;

    if (newTen === '' || newDanhMuc === '' || newSoLuong === '' || newGia === '') {
        window.alert('Vui lòng không được để trống');
        return;
    }

    if (!check_number.test(newSoLuong)) {
        alert("Vui lòng nhập đúng định dạng số lượng");
        return;
    }

    if (!check_gia.test(newGia)) {
        alert("Vui lòng nhập đúng định dạng giá tiền");
        return;
    }

    cells[1].innerText = newTen;
    cells[2].innerText = newDanhMuc;
    cells[3].innerText = newSoLuong;
    cells[4].innerText = newGia;

    cells[6].innerHTML = `<button type="button" onclick="Update(this)"><i class="fa-regular fa-pen-to-square"></i></button>`;
}

function Search(event) {
    const searchText = event.target.value.trim();
    const regex = new RegExp(searchText, 'i');
    const rows = document.querySelectorAll('#table tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let found = false;

        cells.forEach(cell => {
            const text = cell.textContent.trim();
            if (regex.test(text)) {
                found = true;
            }
        });

        if (found) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
