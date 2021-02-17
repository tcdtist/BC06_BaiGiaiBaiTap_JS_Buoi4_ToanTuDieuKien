/* 
hàm chạy() {
    *DOM lấy giá trị dữ liệu và parse về number luôn

    if(xét điều kiện giá trị nhập đúng){không đúng return về lỗi và thoát hàm luôn}

    switch(tháng do ng dùng nhập){
    case 1,5,7,8,10,12:
        + xét tháng 12 để chuyển năm
        + xét ngày == 31 để chuyển tháng
        + xét ngày == 1 để dời về tháng
        + còn lại tăng hoặc giảm 1
    case 4,6,9,11:
        + xét ngày == 30 để chuyển tháng
        + xét ngày == 1 để dời về tháng
        + còn lại tăng hoặc giảm 1
    case 2,3: 
        - xét năm nhuận:
            + ngày == 29 và tháng == 2 => chuyển tháng
            + ngày == 1 và tháng == 2 => dời về tháng
            + ngày == 1 và tháng == 3 => dời về 29
        - năm không nhuận:
            + ngày == 28 và tháng == 2 => chuyển tháng
            + ngày == 1 và tháng == 2 => dời về tháng
            + ngày == 1 và tháng == 3 => dời về 28
        - còn: ngày == 31 và tháng == 3 => chuyển tháng
        - còn lại tăng hoặc giảm 1
    }
    kết quả 
    DOM hiển thị ra màn hình: vd: nhập ngày == 1; tháng == 3; năm == 2020
        + Ngày hôm trước: 	29/2/2020
        + Ngày hôm sau:		2/3/2020
} 
*/

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTNC_1').addEventListener('click', () => {
    var ngayNhap_1 = parseInt(getEle('ngayNhap_1').value);
    var thangNhap_1 = parseInt(getEle('thangNhap_1').value);
    var namNhap_1 = parseInt(getEle('namNhap_1').value);
    var ngayTiepTheo = ngayNhap_1, ngayTruocDo = ngayNhap_1;
    var thangTiepTheo = thangNhap_1, thangTruocDo = thangNhap_1;
    var namTiepTheo = namNhap_1, namTruocDo = namNhap_1;

    if (ngayNhap_1 < 1 || ngayNhap_1 > 31 || thangNhap_1 < 1 || thangNhap_1 > 12 || namNhap_1 < 0 || ngayNhap_1 > 29 && thangNhap_1 === 2 || !checkNamNhuan() && ngayNhap_1 > 28 && thangNhap_1 === 2) {
        alert("Ngày tháng năm nhập không hợp lệ !")
        return;
    }

    switch (thangNhap_1) {
        case 1:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            switch (ngayNhap_1) {
                case 1:
                    if (thangNhap_1 === 1) { ngayTruocDo = 31; thangTruocDo = 12; namTruocDo-- }
                    else if (thangNhap_1 === 8) { ngayTruocDo = 31, thangTruocDo--, namTruocDo }
                    else { ngayTruocDo = 30; thangTruocDo--; namTruocDo; }
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
                case 31:
                    if (thangNhap_1 === 12) { ngayTiepTheo = 1; thangTiepTheo = 1; namTiepTheo++ }
                    else { ngayTiepTheo = 1; thangTiepTheo++; namTiepTheo; }
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    break;
                default:
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            switch (ngayNhap_1) {
                case 1:
                    ngayTruocDo = 31; thangTruocDo--; namTruocDo;
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
                case 30:
                    ngayTiepTheo = 1; thangTiepTheo++; namTiepTheo;
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    break;
                case 31:
                    alert("Ngày tháng năm nhập không hợp lệ !");
                    return;
                default:
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
            }
            break;
        case 2:
        case 3:
            switch (ngayNhap_1) {
                case 1:
                    if (thangNhap_1 === 3) {
                        if (checkNamNhuan(namNhap_1)) { ngayTruocDo = 29; thangTruocDo--; namTruocDo; }
                        else { ngayTruocDo = 28; thangTruocDo--; namTruocDo; }
                    } else { ngayTruocDo = 31; thangTruocDo--; namTruocDo; }
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
                case 28:
                case 29:
                    if (thangNhap_1 === 2) {
                        if (checkNamNhuan(namNhap_1) && ngayNhap_1 === 28) { ngayTiepTheo = 29; thangTiepTheo; namTiepTheo; }
                        else { ngayTiepTheo = 1; thangTiepTheo++; namTiepTheo; }
                    } else { ngayTiepTheo++; thangTiepTheo; namTiepTheo; }
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    break;
                case 31:
                    ngayTiepTheo = 1; thangTiepTheo++; namTiepTheo;
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    break;
                default:
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
            }
            break;
        default:
            alert("Mình xét thiếu gì ư ?")
            return;
    }

    // Đầu ra
    var output_pre_1 = "Ngày trước đó: " + ngayTruocDo + "/" + thangTruocDo + "/" + namTruocDo;
    var output_next_1 = "Ngày tiếp theo: " + ngayTiepTheo + "/" + thangTiepTheo + "/" + namTiepTheo;
    console.log(output_pre_1);
    console.log(output_next_1);
    getEle('kqBTNC_pre_1').value = output_pre_1;
    getEle('kqBTNC_next_1').value = output_next_1;
});

checkNamNhuan = (namNhap_1) => {
    if (namNhap_1 % 100 === 0 && namNhap_1 % 400 === 0 || namNhap_1 % 4 === 0 && namNhap_1 % 100 != 0) return true;
    return false;
} 