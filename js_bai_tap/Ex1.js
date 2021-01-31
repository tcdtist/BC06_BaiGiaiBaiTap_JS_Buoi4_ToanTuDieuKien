/**
 * Đầu vào (input)
 *  - luongNhanVien = 0
 *  - luongMotNgay: 100000
 *  - soNgayLam: 30
 * Xử lý
 *  - luongNhanVien = luongMotNgay * soNgayLam
 * Đầu ra (output)
 * - xuất lương 
 */
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}


getEle('tinhEx1').addEventListener('click', () => {

    var luongMotNgay = 100_000;
    var soNgayLam = parseFloat(getEle('soNgayLam').value);

    var isValid = true;
    isValid &= validation.kiemTraEx1(soNgayLam, 0, 1000, "(*) Số nhập không nằm trong khoảng cho phép.", "txtThongBaoEx1");
    if (!isValid) return isValid;

    luongNhanVien = luongMotNgay * soNgayLam;

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var moneyFormat = currentFormat.format(luongNhanVien);

    console.log("Lương của nhân viên là: " + moneyFormat);

    getEle('kqEx1').value = "Tổng tiền:     " + moneyFormat + " VND";
})
