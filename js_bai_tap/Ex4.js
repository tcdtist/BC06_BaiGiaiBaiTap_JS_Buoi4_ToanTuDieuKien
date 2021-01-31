/**
 * Đầu vào (input)
 *  - chieuDai = 0
 *  - chieuRong = 0
 *  - dienTich = 0
 *  - chuVi = 0
 * Xử lý
 *  - dienTich = chieuDai * chieuRong
 *  - chuVi = (chieuDai + chieuRong) * 2
 * Đầu ra (output)
 *  - Xuất diện tích và chu vi của hình chữ nhật
 */

function getEle(id) {
    return document.getElementById(id);
}

var validation = new Validation();

getEle('tinhEx4_cv').addEventListener('click', () => {

    var chieuDai = parseFloat(getEle("chieuDai").value);
    var chieuRong = parseFloat(getEle("chieuRong").value);
    var chuVi = 0;

    var isValid = true;
    isValid &= validation.kiemTraEx1(soNgayLam, 0, 1000, "(*) Số nhập không nằm trong khoảng cho phép.", "txtThongBaoEx1");
    if (!isValid) return isValid;

    chuVi = (chieuDai + chieuRong) * 2;

    console.log("Chu vi hình chữ nhật là: " + chuVi);

    var kqEx4_cv = "Chu vi hình chữ nhật là:     " + chuVi;

    getEle('kqEx4').value = kqEx4_cv;
});

getEle('tinhEx4_dt').addEventListener('click', () => {

    var chieuDai = parseFloat(getEle("chieuDai").value);
    var chieuRong = parseFloat(getEle("chieuRong").value);
    var dienTich = 0;

    var isValid = true;
    isValid &= validation.kiemTraEx4(chieuDai, chieuRong, 1000, "(*) Số nhập không nằm trong khoảng cho phép.", "txtThongBaoEx4");
    if (!isValid) return isValid;

    dienTich = chieuDai * chieuRong;

    console.log("Diện tích hình chữ nhật là: " + dienTich);

    var kqEx4_dt = "Diện tích hình chữ nhật là:     " + dienTich;

    getEle('kqEx4').value = kqEx4_dt;
});