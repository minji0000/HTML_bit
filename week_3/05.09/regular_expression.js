jQuery(function ($) {

    var test_nickname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,6}$/;
    var test_job = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,6}$/;
    var test_level = /^[0-9]{1,11}$/;
    var test_server = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,10}$/;
    var test_pw = /^[a-z0-9]{4,6}$/;

    var box_nickname = $('#name');
    var box_job = $('#job');
    var box_level = $('#level');
    var box_server = $('#server');
    var box_pw = $('#pw');
    var box_regular = $('.regular');

    box_regular.submit(function () {
        if (test_nickname.test(box_nickname.val()) != true) {
            alert('닉네임 제대로 입력했어?');
            box_nickname.focus();
            return false;
        } else if (test_job.test(box_job.val()) != true) {
            alert('직업 제대로 입력한 거 맞아?');
            box_job.focus();
            return false;
        } else if (test_level.test(box_level.val()) != true) {
            alert('레벨 똑바로 쓴 거 맞아?');
            box_level.focus();
            return false;
        } else if (test_server.test(box_server.val()) != true) {
            alert('서버 제대로 썼어?');
            box_server.focus();
            return false;
        } else if (test_pw.test(box_pw.val()) != true) {
            alert('비밀번호 제대로 써야지!');
            box_pw.focus();
            return false;
        }

    });
}
)