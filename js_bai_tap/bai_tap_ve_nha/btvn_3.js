/**
 * tạo 3 số 
 *  num_1
 *  num_2
 *  num_3
 *  chan = 0
 *  le = 0
 * 
 * 
 * nếu, num_1 % 2 = 0
 *      => chan = chan + 1
 * ngược lại,
 *      => le = le + 1
 * 
 * nếu, num_2 % 2 = 0
 *      => chan = chan + 1
 * ngược lại,
 *      => le = le + 1
 * 
 * nếu, num_3 % 2 = 0
 *      => chan = chan + 1
 * ngược lại,
 *      => le = le + 1
 * 
 * 
 * xuất kết quả
 */

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTVN_3').addEventListener('click', () => {
    var num_1 = parseFloat(getEle('inputNumber1').value);
    var num_2 = parseFloat(getEle('inputNumber2').value);
    var num_3 = parseFloat(getEle('inputNumber3').value);
    var chan = 0;
    var le = 0;

    num_1 % 2 == 0 ? chan++ : le++;
    num_2 % 2 == 0 ? chan++ : le++;
    num_3 % 2 == 0 ? chan++ : le++;

    // Đầu ra
    var output_3 = "Có " + chan + " số chẵn" + " và " + "Có " + le + " số lẻ";
    console.log(output_3);
    getEle('kqBTVN_3').value = output_3;
});