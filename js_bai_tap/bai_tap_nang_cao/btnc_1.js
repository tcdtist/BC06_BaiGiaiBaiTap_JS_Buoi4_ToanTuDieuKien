/**
 * tạo 3 biến ngày, tháng, năm 
 * 
 * nếu, là các tháng 1,3,5,7,8,10,12
 *      nếu, là ngày 31/12 => ngày tiếp theo là ngày 1/1/nam + 1
 *      nếu, là ngày 31 => ngày tiếp theo là ngày 1
 *                      => thang = thang + 1
 *      các ngày còn lại + 1
 * 
 * nếu, là các tháng 4,6,9,11
 *      nếu, là ngày 30/12 => ngày tiếp theo = 1
 *                        => thang = thang + 1
 *                        => nam = nam + 1
 *      nếu, là ngày 30 => thang = thang + 1
 *                      => ngay = 1
 *      các ngày còn lại + 1
 * 
 * nếu, là tháng 2 thì phải xét năm nhuận hay k nhuận
 *  nếu là năm nhuận thì điều kiện là: năm phải chia hết cho 400 hoặc (chia hết ch0 4 và k chia hết cho 100)
 *  nếu, năm nhuận:
 *      nếu ngày = 29 => ngay = 1
 *          thang = thang + 1
 *          các ngày còn lại + 1
 *  nếu, năm không nhuận:
 *      nếu ngày = 28 => ngay = 1
 *          thang = thang + 1
 *          các ngày còn lại + 1
 * 
 * 
 * 
 *    
 * xuất ngày tiếp theo          
 * 
 */

function tiepTheo() {
    var ngay = document.getElementById("ngay").value;
    var thang = document.getElementById("thang").value;
    var nam = document.getElementById("nam").value;

    ngay = parseInt(ngay);
    thang = parseInt(thang);
    nam = parseInt(nam);

    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        if (ngay == 31 && thang == 12) {
            ngay = 1;
            thang = 1;
            nam = nam + 1;
        } else if (ngay == 31) {
            ngay = 1;
            thang = thang + 1;
        } else {
            ngay = ngay + 1;
        }
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        if (ngay == 30 && thang == 12) {
            ngay = 1;
            thang = 1;
            nam = nam + 1;
        } else if (ngay == 30) {
            ngay = 1;
            thang = thang + 1;
        } else {
            ngay = ngay + 1;
        }
    } else if (thang == 2) {
        if (nam % 400 == 0 || ((nam % 4 == 0) && (nam % 100 != 0))) {
            if (ngay == 29) {
                ngay = 1;
                thang = thang + 1;
            } else {
                ngay = ngay + 1;
            }
        } else if (ngay == 28) {
            ngay = 1;
            thang = thang + 1;
        } else {
            ngay = ngay + 1;
        }
    }

    var ketQua = ngay + "/" + thang + "/" + nam;
    document.getElementById("ketQuaTiepTheo").innerHTML = ketQua;
}

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

    if (ngayNhap_1 < 1 || ngayNhap_1 > 31 || thangNhap_1 < 1 || thangNhap_1 > 12 || namNhap_1 < 0) {
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
                    if (thangNhap_1 == 1) { console.log("ádjhgasjd"); ngayTruocDo == 31; thangTruocDo == 12; namTruocDo-- }
                    else { ngayTruocDo == 31; thangTruocDo--; namTruocDo; }
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
                case 31:
                    if (thangNhap_1 == 12) { ngayTiepTheo == 1; thangTiepTheo == 1; namTiepTheo++ }
                    else { ngayTiepTheo == 1; thangTiepTheo++; namTiepTheo; }
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
                    ngayTruocDo == 30; thangTruocDo--; namTruocDo;
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
                case 30:
                    ngayTiepTheo == 1; thangTiepTheo++; namTiepTheo;
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    break;
                default:
                    ngayTruocDo--; thangTruocDo; namTruocDo;
                    ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                    break;
            }
            break;
        case 2:
        case 3:
            if (nam % 100 == 0 && nam % 400 == 0 || nam % 4 == 0 && nam % 100 != 0) {
                switch (ngayNhap_1) {
                    case 1:
                        if (thangNhap_1 == 3) { ngayTruocDo == 29; thangTruocDo--; namTruocDo }
                        else { ngayTruocDo == 31; thangTruocDo--; namTruocDo; }
                        ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                        break;
                    case 29:
                        ngayTiepTheo == 1; thangTiepTheo++; namTiepTheo;
                        ngayTruocDo--; thangTruocDo; namTruocDo;
                        break;
                    default:
                        ngayTruocDo--; thangTruocDo; namTruocDo;
                        ngayTiepTheo++; thangTiepTheo; namTiepTheo;
                        break;
                }
            }

            break;

        default:
            alert("Tháng nhập không hợp lệ !")
            break;
    }

    // Đầu ra
    var output_pre_1 = "Ngày trước đó: " + ngayTruocDo + "/" + thangTruocDo + "/" + namTruocDo;
    var output_next_1 = "Ngày tiếp theo: " + ngayTiepTheo + "/" + thangTiepTheo + "/" + namTiepTheo;
    console.log(output_pre_1);
    console.log(output_next_1);
    getEle('kqBTNC_pre_1').value = output_pre_1;
    getEle('kqBTNC_next_1').value = output_next_1;
});