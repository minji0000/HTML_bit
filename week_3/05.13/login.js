members_info =
{
    민지: { id: "ming", password: "blue" },
    메리: { id: "merry", password: "pink" },
    낙타: { id: "carmel", password: "red" }
};

function members_compare() {

    let members_id = document.getElementById("id").value;
    let members_pw = document.getElementById("pw").value;


    for (let key in members_info) {
        let info = members_info[key];
        console.log(info.id)
        // return false;
        if (members_id == info.id) {
            if (members_pw == info.password) {
                alert("로그인 되었습니다.");
                return false;
            }
            else {
                alert("다시 입력해주세요.");
                //  return false;
            }
            return false;
        }
    }
}


// for (let key in members_info) {
//     let info = members_info[key];
//     for (let value1 in info) {
//         console.log(info[value1])
//     }
// } 오빠들이 해논 코드

