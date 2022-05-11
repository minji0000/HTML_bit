
let id = "";
let pw = "";
let members_id = ["ming", "blue"];
console.log("flag1");
function check_id() {
    console.log("hghty")
    //alert(members_id[0] + members_id[1]);

    id = (document.getElementById("id_id").value);
    pw = (document.getElementById("id_pw").value);

    if (id == members_id[0]) {
        if (pw == members_id[1]) {
            alert("로그인 됐어");
        }
    } else {
        alert("아니야!");
        return false;
    }
    return false;
}


/* function check_id() {
    var members_id = ["dog", "ming", "mingdi", "cat"];
    alert(members_id[0] + " " + members_id[1] + " " + members_id[2] + " " + members_id[3]);
    return false;
}

//주석처리 해놓고 주석만 뺴고 다 지우고 다시 치기 */

/* var members_info =
    [
        ["토끼", "당근"],
        ["코끼리", "과일"],
        ["원숭이", "바나나"]
    ];
document.write(members_info[0][0]);
document.write(members_info[0][1]);
document.write(members_info[2][0]);
document.write(members_info[1][1]); */