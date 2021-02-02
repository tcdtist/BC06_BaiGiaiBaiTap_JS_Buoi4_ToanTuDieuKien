/**
 * tạo toạ độ của từng sinh viên : sv1(x1,y1) sv2(x2,y2) sv3(x3,y3) và toạ độ của trường (x_truong,y_truong)
 * tạo các biến khoangCach1, khoangCach2, khoangCach3
 * 
 * 
 * tính khoảng cách từ toạ độ của từng sv đến trường
 * sau đó, so sánh từng khoảng cách, nếu khoangCach_1 > khoangCach_2 và khoangCach_3
 *  => sv1 xa trường nhất
 *  tương tự sv2 và sv3
 * 
 * xuất kq
 */

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTNC_4').addEventListener('click', () => {
    var khoangCach = 0;
    var khoangCachXaNhat = 0;
    var tenSVXaNhat = "";

    //Lấy tọa độ trường
    var toaDoTruongX = parseInt(getEle('toaDoTruongX').value);
    var toaDoTruongY = parseInt(getEle('toaDoTruongY').value);

    //SINH VIÊN 1
    var tenSV1 = getEle('tenSV1').value;
    var toaDoSV1X = parseInt(getEle('toaDoSV1X').value);
    var toaDoSV1Y = parseInt(getEle('toaDoSV1Y').value);

    khoangCach = tinhKhoangCachTuNhaToiTruong(toaDoSV1X, toaDoSV1Y, toaDoTruongX, toaDoTruongY);
    khoangCachXaNhat = khoangCach;
    tenSVXaNhat = tenSV1;

    //SINH VIÊN 2
    var tenSV2 = getEle('tenSV2').value;
    var toaDoSV2X = parseInt(getEle('toaDoSV2X').value);
    var toaDoSV2Y = parseInt(getEle('toaDoSV2Y').value);

    khoangCach = tinhKhoangCachTuNhaToiTruong(toaDoSV2X, toaDoSV2Y, toaDoTruongX, toaDoTruongY);
    if (khoangCachXaNhat < khoangCach) { khoangCachXaNhat = khoangCach; tenSVXaNhat = tenSV2; }

    //SINH VIÊN 3
    var tenSV3 = getEle('tenSV3').value;
    var toaDoSV3X = parseInt(getEle('toaDoSV3X').value);
    var toaDoSV3Y = parseInt(getEle('toaDoSV3Y').value);

    khoangCach = tinhKhoangCachTuNhaToiTruong(toaDoSV3X, toaDoSV3Y, toaDoTruongX, toaDoTruongY);
    if (khoangCachXaNhat < khoangCach) { khoangCachXaNhat = khoangCach; tenSVXaNhat = tenSV3; }

    // Check kết quả
    console.log("Tọa độ lấy được SV1: " + tenSV1 + "(" + toaDoSV1X + ";" + toaDoSV1Y + ")");
    console.log("Tọa độ lấy được SV2: " + tenSV2 + "(" + toaDoSV2X + ";" + toaDoSV2Y + ")");
    console.log("Tọa độ lấy được SV3: " + tenSV3 + "(" + toaDoSV3X + ";" + toaDoSV3Y + ")");
    console.log("Tọa độ lấy được Trường: " + "(" + toaDoTruongX + ";" + toaDoTruongY + ")");

    // Đầu ra
    var output_4 = "Sinh viên ở xa trường nhất là:     " + tenSVXaNhat + " - với khoảng cách = " + Math.floor(khoangCachXaNhat);
    console.log(output_4);
    getEle('kqBTNC_4').value = output_4;

});

// TÍNH KHOẢNG CÁCH TỪ NHÀ TỚI TRƯỜNG
tinhKhoangCachTuNhaToiTruong = (toaDoSV_x, toaDoSV_y, toaDoTruongX, toaDoTruongY) => {
    return Math.sqrt(Math.pow(toaDoSV_x - toaDoTruongX, 2) + Math.pow(toaDoSV_y - toaDoTruongY, 2));
}