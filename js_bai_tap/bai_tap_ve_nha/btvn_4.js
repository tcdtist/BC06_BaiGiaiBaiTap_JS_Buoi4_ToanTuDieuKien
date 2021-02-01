/**
 * tạo 3 canh tam giác
 * 
 * 
 * nếu, cạnh 1 khác cạnh 2 và cạnh 1 khác cạnh 3 và cạnh 2 khác cạnh 3
 *      => tam giác thường
 * nếu, cạnh 1 bằng cạnh 2 || cạnh 1 bằng cạnh 3 || cạnh 2 = cạnh 3
 *      => tam giác cân
 * nếu, cạnh 1 bằng cạnh 2 và cạnh 1 = cạnh 3
 *      => tam giác đều
 * nếu, có định lý pytago
 *      => tam giác vuông
 * 
 * xuất kết quả
 */

function tamGiac() {
    var canh_1 = document.getElementById("canh_1").value;
    var canh_2 = document.getElementById("canh_2").value;
    var canh_3 = document.getElementById("canh_3").value;

    canh_1 = parseInt(canh_1);
    canh_2 = parseInt(canh_2);
    canh_3 = parseInt(canh_3);

    if (canh_1 != canh_2 && canh_1 != canh_3 && canh_2 != canh_3) {
        var ketQua = "Tam giác thường";
        document.getElementById("ketQuaTamGiac").innerHTML = ketQua;
    }
    if (canh_1 == canh_2 || canh_1 == canh_3 || canh_2 == canh_3) {
        var ketQua = "Tam giác cân";
        document.getElementById("ketQuaTamGiac").innerHTML = ketQua;
    }
    if (
        canh_3 == Math.sqrt((canh_1 * canh_1) + (canh_2 * canh_2)) ||
        canh_1 == Math.sqrt((canh_2 * canh_2) + (canh_3 * canh_3)) ||
        canh_2 == Math.sqrt((canh_1 * canh_1) + (canh_3 * canh_3))
    ) {
        var ketQua = "Tam giác vuông";
        document.getElementById("ketQuaTamGiac").innerHTML = ketQua;
    }
    if (canh_1 == canh_2 && canh_1 == canh_3) {
        var ketQua = "Tam giác đều";
        document.getElementById("ketQuaTamGiac").innerHTML = ketQua;
    }
}

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTVN_4').addEventListener('click', () => {
    var canhA = parseFloat(getEle('canh_1').value);
    var canhB = parseFloat(getEle('canh_2').value);
    var canhC = parseFloat(getEle('canh_3').value);

    // Kiểm tra tam giác
    if (Math.abs(canhA - canhB) < canhC && canhC < (canhA + canhB)) { 	// điều kiện để là 1 tam giác

        if (canhA == canhB && canhB == canhC) {
            output_4 = "Đây là tam giác đều.";
        } else if (canhA == canhB || canhA == canhC || canhB == canhC) { // trong tam giác cân có tam giác vuông cân
            if (canhA * canhA + canhB * canhB == canhC * canhC || canhA * canhA + canhC * canhC == canhB * canhB
                || canhB * canhB + canhC * canhC == canhA * canhA) {
                output_4 = "Đây là tam giác vuông cân.";
            } else {
                output_4 = "Đây là tam giác cân.";
            }
        } else if (canhA * canhA + canhB * canhB == canhC * canhC || canhA * canhA + canhC * canhC == canhB * canhB
            || canhB * canhB + canhC * canhC == canhA * canhA) {
            output_4 = "Đây là tam giác vuông.";
        } else if (canhA * canhA + canhB * canhB < canhC * canhC || canhA * canhA + canhC * canhC < canhB * canhB
            || canhB * canhB + canhC * canhC < canhA * canhA) {
            output_4 = "Đây là tam giác tù.";
        } else {
            output_4 = "Đây là tam giác thường.(tam giác nhọn)";
        }

    } else {
        output_4 = "Đây không phải hình tam giác.";
    }

    // Đầu ra
    console.log(output_4);
    getEle('kqBTVN_4').value = output_4;
});