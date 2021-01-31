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




function chanLe() {
    var num_1 = document.getElementById("num_1").value;
    var num_2 = document.getElementById("num_2").value;
    var num_3 = document.getElementById("num_3").value;
    var chan = 0;
    var le = 0;

    if (num_1 % 2 == 0) {
        chan = chan + 1;
    } else {
        le = le + 1;
    }

    if (num_2 % 2 == 0) {
        chan = chan + 1;
    } else {
        le = le + 1;
    }

    if (num_3 % 2 == 0) {
        chan = chan + 1;
    } else {
        le = le + 1;
    }

    var ketQua = "Có " + chan + " số chẵn" + " ; " + "Có " + le + " số lẻ";
    document.getElementById("ketQuaChanLe").innerHTML = ketQua;
}