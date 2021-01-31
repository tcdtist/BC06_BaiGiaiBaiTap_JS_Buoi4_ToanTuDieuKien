/**
 * Đầu vào (input)
 *      - 3 số nguyên: num_1, num_2, num_3
 * Xử lý
 *      nếu num_1 > num_2
 *          => hoán đổi vị giá trị num_1 và num_2
 *      nếu num_1 > num_3 
 *          => hoán đổi vị giá trị num_1 và num_3
 *      nếu num_2 > num_3
 *          => hoán đổi vị giá trị num_2 và num_3
 * Đầu ra (output)
 *      - thứ tự các số
 */

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTVN_1').addEventListener('click', () => {

    // Lấy giá trị từ input người dùng nhập
    var num_1 = parseFloat(getEle('numInput_1').value);
    var num_2 = parseFloat(getEle('numInput_2').value);
    var num_3 = parseFloat(getEle('numInput_3').value);
    console.log(num_1, num_2, num_3);

    //Xét giá trị đầu vào
    if (num_1 === num_2 || num_2 === num_3 || num_3 === num_1) {
        return alert("Vui lòng không nhập các số bằng nhau.");
    }

    // Giải thuật hoán đổi vị trí
    if (num_1 > num_2) {
        num_1 = num_1 + num_2;
        num_2 = num_1 - num_2;
        num_1 = num_1 - num_2;
    }
    if (num_1 > num_3) {
        num_1 = num_1 + num_3;
        num_3 = num_1 - num_3;
        num_1 = num_1 - num_3;
    }
    if (num_2 > num_3) {
        num_2 = num_2 + num_3;
        num_3 = num_2 - num_3;
        num_2 = num_2 - num_3;
    }

    // Đầu ra
    var output_1 = "Thứ tự 3 số tăng dần là: " + num_1 + " < " + num_2 + " < " + num_3;
    console.log(output_1);
    getEle('kqBTVN_1').innerHTML = output_1;
});
