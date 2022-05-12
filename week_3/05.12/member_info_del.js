let member_info =
{
    info1: { name: "ming", add: "seoul", num: "0401" },
    info2: { name: "di", add: "yangpyong", num: "9655" },
};


alert([member_info][info1]);
// alert(member_info.info2);

function del_member() {
    let member_name = document.getElementById("name").value;
    if (member_name == member_info.info1.name) {
        delete member_info.info1.name;
        alert(member_info.info1.name);
    } else {
        alert("없던데?");
        return false;
    }
}