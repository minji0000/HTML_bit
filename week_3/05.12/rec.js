var user_box = { // 각각의 객체로 들어가야한다.
    Lee: { "name": "Lee1", "add": "Jongno", "ph": "010-1" },
    Kim: { "name": "Kim1", "add": "busan", "ph": "010-2" },
};
var i = 0;
var j = 0;

function Activate_Filters() {
    var user_box_search = document.getElementById("user_name").value;
    var user_box_delete = document.getElementById("user_name_del").value;
    // if (user_box.Lee.name == user_box_search) {
    //     alert(user_box.Lee.name);
    //     return false;
    // } else {
    //     alert("Fuck");
    //     return false;
    // 
    for (var key in user_box) { // user_box안의 각 첫 객체들을 key값에 넣는다.
        console.log([key]);
        // console.log(user_box[key]);
        // j++;
        var personObj = user_box[key]; //personObj에 각각의 객체들의 요소들을 넣는다.
        // console.log("flag1", personObj.name, user_box_search); //잘 들어갓는지 확인한다.
        // console.log([key]);  //key값을 확인한다.
        // console.log("결과 갯수1" + personObj.name.length);
        // console.log("결과 갯수2" + user_box_search.length);
        // console.log("결과 갯수3" + key.length);1
        if (personObj.add == user_box_search) { //검색기능 제어
            console.log("결과 갯수1" + personObj.name.length); //4
            console.log("결과 갯수2" + user_box_search.length);//4
            console.log("flag2", key); //kry값이 잘 대입되었는지 확인한다.
            console.log("name : ", personObj.name + ", add : " + personObj.add);
            if (personObj.add == user_box_delete) { // 지우는 기능 제어
                delete personObj.add; //delete를 누르면 앞의 내용이 삭제된다.
                console.log("name", personObj.name); //이름이 삭제되었는지 확인한다.
                console.log("add", personObj.add); //주소는 그대로 잘 있는지 확인한다.
                console.log("ph", personObj.ph); // 번호가 살아있는지 확인한다.
            } break;
        } else {
            // if (i >= j) {
            //     alert("Fuck!!!");
            // } /* alert("Fuck!!!"); */
        }
    } return false;

}