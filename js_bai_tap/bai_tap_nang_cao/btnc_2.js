function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTNC_2').addEventListener('click', () => {
    var thangNhap_2 = parseInt(getEle('thangNhap_2').value);
    var namNhap_2 = parseInt(getEle('namNhap_2').value);
    var demNgay = 0;

    switch (thangNhap_2) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            demNgay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            demNgay = 30;
            break;
        case 2:
            if (namNhap_2 % 100 == 0 && namNhap_2 % 400 == 0 || namNhap_2 % 4 == 0 && namNhap_2 % 100 != 0) {
                demNgay = 29;
            } else {
                demNgay = 28;
            }
    }
    if (thangNhap_2 > 0 && thangNhap_2 <= 12 && namNhap_2 >= 0) {
        // Đầu ra
        var output_2 = "Tháng " + thangNhap_2 + " năm " + namNhap_2 + " có " + demNgay + " ngày."
        console.log(output_2);
        getEle('kqBTNC_2').value = output_2;
    } else {
        alert("Tháng năm nhập không hợp lệ.");
    }

});

