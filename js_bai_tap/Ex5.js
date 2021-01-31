/**
 * Đầu vào (input)
 *  - so_1 = 12
 *  - so_2 = 44
 *  - soHangChuc_1 = 0
 *  - soHangDonVi_1 = 0
 *  - tongHaiSo_1 = 0
 *  - soHangChuc_2 = 0
 *  - soHangDonVi_2 = 0
 *  - tongHaiSo_2 = 0
 * Xử lý
 *  - soHangChuc_1 = so_1 / 10
 *  - soHangDonVi_1 = so_1 % 10
 *  - tongHaiSo_1 = soHangChuc_1 + soHangDonVi_1
 * 
 *  - soHangChuc_2 = so_2 / 10
 *  - soHangDonVi_2 = so_2 % 10
 *  - tongHaiSo_2 = soHangChuc_2 + soHangDonVi_2
 * Đầu ra (output)
 *  - Xuất tổng 2 ký số 
 */

function getEle(id) {
    return document.getElementById(id);
}

var validation = new Validation();

getEle('tinhEx5').addEventListener('click', () => {

    var soNhap = parseFloat(getEle("soNhap").value);

    var isValid = true;
    isValid &= validation.kiemTraEx5(soNhap, 0, 1000, "(*) Số nhập không nằm trong khoảng cho phép.", "txtThongBaoEx5");
    if (!isValid) return isValid;

    soHangChuc = Math.floor(soNhap / 10)
    soHangDonVi = Math.floor(soNhap % 10)

    var tongHaiSo = soHangChuc + soHangDonVi;

    console.log("Tổng 2 ký số là: " + tongHaiSo);

    var kqEx5 = "Tổng 2 ký số là:     " + tongHaiSo;

    getEle('kqEx5').value = kqEx5;
});