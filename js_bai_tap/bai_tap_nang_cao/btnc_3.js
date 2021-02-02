/*
 * Đầu vào
 * tạo biến hàng trăm, hàng chục, hàng đơn vị và 3 biến đọc số
 * 
 * Xử lý
 * nếu số không phải là 3 chữ số => xuất thông báo lỗi
 * nếu là số có 3 chữ số 
 *      tính lấy các số ở hàng trăm, hàng chục và hàng đơn vị
 *      nếu, hàng trăm = 1 => in ra kq là một trăm
 *      tương tự đến hàng trăm từ 2 đến 9
 *          
 *      nếu hàng chục = 0 => in ra kq hang chục
 *      tương tự đến hàng chục từ 1 đến 9
 * 
 *      nếu hàng đơn vị = 0 => in ra kết quả
 *      tương tự đến hàng đơn vị từ 1 đến 9
 * 
 * Xuất kết quả
 */

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTNC_3').addEventListener('click', () => {
    var soNhap_3 = parseInt(getEle('soNhap_3').value);
    var hangTram = 0, docHangTram = "";
    var hangChuc = 0, docHangChuc = "";
    var hangDV = 0, docHangDV = "";

    hangTram = Math.floor(soNhap_3 / 100);
    hangChuc = Math.floor(soNhap_3 % 100 / 10);
    hangDV = Math.floor(soNhap_3 % 10);

    console.log("Số lấy đc là: " + hangTram + " + " + hangChuc + " + " + hangDV);

    // đọc số hàng trăm
    switch (hangTram) {
        case 1:
            docHangTram = "Một trăm ";
            break;
        case 2:
            docHangTram = "Hai trăm ";
            break;
        case 3:
            docHangTram = "Ba trăm ";
            break;
        case 4:
            docHangTram = "Bốn trăm ";
            break;
        case 5:
            docHangTram = "Năm trăm ";
            break;
        case 6:
            docHangTram = "Sáu trăm ";
            break;
        case 7:
            docHangTram = "Bảy trăm ";
            break;
        case 8:
            docHangTram = "Tám trăm ";
            break;
        case 9:
            docHangTram = "Chín trăm ";
            break;
    }

    // Đọc hàng chục
    switch (hangChuc) {
        case 0:
            hangDV !== 0 ? docHangChuc = "linh " : docHangChuc = "";
            break;
        case 1:
            docHangChuc = "mười ";
            break;
        case 2:
            docHangChuc = "hai mươi ";
            break;
        case 3:
            docHangChuc = "ba mươi ";
            break;
        case 4:
            docHangChuc = "bốn mươi ";
            break;
        case 5:
            docHangChuc = "năm mươi ";
            break;
        case 6:
            docHangChuc = "sáu mươi ";
            break;
        case 7:
            docHangChuc = "bảy mươi ";
            break;
        case 8:
            docHangChuc = "tám mươi ";
            break;
        case 9:
            docHangChuc = "chín mươi ";
            break;
    }

    // đọc hàng đơn vị
    switch (hangDV) {
        case 0:
            docHangDV = "";
            break;
        case 1:
            (hangChuc === 0 || hangChuc === 1) ? docHangDV = "một." : docHangDV = "mốt.";
            break;
        case 4:
            hangChuc === 1 ? docHangDV = "bốn." : docHangDV = "tư.";
            break;
        case 5:
            hangChuc !== 0 ? docHangDV = "lăm." : docHangDV = "năm.";
            break;
        case 2:
            docHangDV = "hai.";
            break;
        case 3:
            docHangDV = "ba.";
            break;
        case 6:
            docHangDV = "sáu.";
            break;
        case 7:
            docHangDV = "bảy.";
            break;
        case 8:
            docHangDV = "tám.";
            break;
        case 9:
            docHangDV = "chín.";
            break;
    }

    // Đầu ra
    if (soNhap_3 >= 100 && soNhap_3 <= 999) {
        var output_3 = "Số đọc là:     " + docHangTram + "" + docHangChuc + "" + docHangDV;
        console.log(output_3);
        getEle('kqBTNC_3').value = output_3;
    } else {
        alert("Số nhập không hợp lệ.");
        getEle('kqBTNC_3').value = "";
    }

});