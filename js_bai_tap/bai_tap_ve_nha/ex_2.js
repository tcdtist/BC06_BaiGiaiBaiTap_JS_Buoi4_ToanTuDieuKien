/**
 * Đầu vào (input)
 *      chucDanh
 * Xử lý
 *      chucDanh == b => bố
 *      chucDanh == m => mẹ
 *      chucDanh == a => anh trai
 *      chucDanh == e => em gái
 * Đầu ra (output)
 *      câu chào phù hợp
 */

function getEle(id) {
    return document.getElementById(id);
};

getEle('tinhBTVN_2').addEventListener('click', () => {

    // Lấy giá trị từ input người dùng nhập
    var chucDanh = parseFloat(getEle('chucDanh').value);
    console.log('Chức danh:' + chucDanh);

    //Xét giá trị đầu vào về ký tự viết thường
    chucDanh = chucDanh.toLowerCase();
    console.log('Chức danh viết thường:' + chucDanh);

    //Các biến hứng kết quả
    var output_2 = 'Hi!';

    // Giải thuật
    switch (chucDanh) {
        case 'b':
            output_2 += ' Chào Bố!'
            break;
        case 'm':
            output_2 += ' Chào Mẹ!'
            break;
        case 'a':
            output_2 += ' Chào Anh Trai!'
            break;
        case 'e':
            output_2 += ' Chào Em Gái!'
            break;

        default:
            alert('Ký tự nhập không thuộc phạm vi đề bài !');
            break;
    }

    // Đầu ra
    console.log(output_2);
    getEle('kqBTVN_2').innerHTML = output_2;
});