/**
 * Đầu vào (input)
 *  - giaUSD = 23500 (VND)
 *  - soTien = 0 (USD)
 * Xử lý
 *  - tienViet = soTien * giaUSD
 * Đầu ra (output)
 *  - xuất tiền sau khi đổi
 */

function getEle(id) {
    return document.getElementById(id);
}

var validation = new Validation();

getEle('tinhEx3').addEventListener('click', () => {

    var giaUSD = 23_500;
    var soTienCanDoi = parseFloat(getEle("soTienCanDoi").value);

    var isValid = true;
    isValid &= validation.kiemTraSo(soTienCanDoi, "(*) Chỉ được nhập số.", "txtThongBaoEx3");
    if (!isValid) return isValid;

    tienVNĐ = soTienCanDoi * giaUSD;

    currentFormat = new Intl.NumberFormat("vn-VN");

    var kqEx3 = "Tiền sau khi đổi là: " + currentFormat.format(tienVNĐ) + " VND"

    console.log("Tiền sau khi đổi là:     " + currentFormat.format(tienVNĐ) + " VND");

    getEle('kqEx3').value = kqEx3;
});