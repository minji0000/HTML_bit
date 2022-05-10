jQuery(function ($) {
    var name = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,18}$/; // 이름 검사식
    var adress = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,18}$/; // 한글 검사식
    var number = /^[0-9]{8,11}$/; // 전화번호 검사식
    var id = /^[a-z0-9]{3,16}$/; // 아이디 검사식
    var pw = /^[a-z0-9]{6,18}$/;  // 암호 검사식 

    var user_name = $('#name');
    var user_adress = $('#adress');
    var user_number = $('#number');
    var user_id = $('#id');
    var user_pw = $('#pw');
    var form = $('.form');

    form.submit(function () {
        if (name.test($('#name').val()) != true) { //name,test(user_name) (user_name)을 test하는데 위에 변수로 정한 정규식 name으로 검사하겠다. 
            alert('유효한 이름을 입력해주세요');
            user_name.focus();
            return false;
        } else if (adress.test(user_adress.val()) != true) {
            alert('유효한 주소를 입력해주세요.');
            user_adress.focus();
            return false;
        } else if (number.test(user_number.val()) != true) {
            alert('유효한 번호를 입력해주세요.');
            user_number.focus();
            return false;
        } else if (id.test(user_id.val()) != true) {
            alert('유효한 아이디를 입력해주세요.');
            user_id.focus();
            return false;
        } else if (pw.test(user_pw.val()) != true) {
            alert('유효한 비밀번호를 입력해주세요.');
            user_pw.focus();
            return false;
        }

    });
}
)