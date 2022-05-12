let member_info =
{
    info1: { name: "ming", add: "seoul", num: "0401" },
    info2: { name: "di", add: "yangpyong", num: "9655" },
};


function del_member() {
    let member_name = document.getElementById("name").value;

    for (let rec in member_info) {
        // console.log(rec, member_info[rec]);
        let info = member_info[rec];

        if (info.name == member_name) {
            delete info.name;
            console.log("name", info.name);
            console.log("add", info.add);
            console.log("num", info.num);
            return false; // 리턴값은 if문 안에 넣어야 한다. 안 그러면 무한대로 돌아
        }
        else {
            alert("아니야!");
        }
    } return false;
}
