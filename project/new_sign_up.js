let id = "";
let password = "";
let infor = (id + password);
let userinfor = (userid + userpw);

function save() {
    id = document.getElementById('id').value;
    password = document.getElementById('password').value;
    console.log(id);
    console.log(password);

}
function compare() {
    let userid = 'blue';
    let userpw = '0000';

    userinfor = document.getElementsByName("infor");

    if (userinfor == infor) {
        alert("로그인")
    } else {
        alert("다시 입력하시오.")
    }

}






