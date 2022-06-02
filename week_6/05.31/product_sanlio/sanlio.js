
// JavaScript 사용
let SanlioContainer = new Array();
let count = 0;

// 산리오의 정보를 담을 객체의 설계도 생성 ! 이런 틀로 여러 개 만들거에요~
function Sanlio(n, c, b, f) {
    this.Character = n; this.Color = c; this.Birthday = b; this.Freind = f;
}

// 산리오가 저장될 객체
function save() {
    count++;
    //입력한 데이터를 저장할 변수 만들어주기 !
    let save_character = document.getElementById("character").value;
    let save_color = document.getElementById("color").value;
    let save_birthday = document.getElementById("birthday").value;
    let save_friend = document.getElementById("friend").value;

    //산리오 정보 등록 (설계도 -> 객체생성 -> 데이터삽입-> 객체저장)
    let NewObject = new Sanlio(save_character, save_color, save_birthday, save_friend);
    SanlioContainer.push(NewObject); //배열에 넣어준다는 뜻
    console.log(SanlioContainer);
}


function print_table() {
    document.getElementsByClassName('print_div')[0].innerHTML = ""; // 일단 출력하는 곳을 청소한다. (cleanning)
    let sanlio_table = "";//여기에 html들을 계속 누적시킬 것임.
    sanlio_table = "<table border=1><tr><th>CHARACTER</th><th>COLOR</th><th>BIRTHDAY</th><th>FREIND</th></tr>";
    for (let i = 0; i < SanlioContainer.length; i++) {
        sanlio_table += "<tr><td>" + SanlioContainer[i].Character + "</td><td>" + SanlioContainer[i].Color + "</td><td>" +
            SanlioContainer[i].Birthday + "</td><td>" + SanlioContainer[i].Freind + "</td></tr>";
    }
    sanlio_table += "</table>";
    document.getElementsByClassName("print_div")[0].innerHTML = sanlio_table; // 현재까지 누적된 문자열 출력
    // 클래스 네임이면 이름 중복 선언이 가능하므로 배열처럼 [i] i번째인지 적어주어야함.
}

function search_name() {
    let search_charater = document.getElementById("search").value;
    for (let i = 0; i < SanlioContainer.length; i++) {
        if (search_charater == SanlioContainer[i].Character) {
            alert(SanlioContainer[i].this.Birthday + "이 생일인 " + SanlioContainer[i].Character + "에요");
            return;
        } if ((SanlioContainer.length - 1) == i) {
            alert("그런 캐릭터는 없어요! 다시 검색해봐 잼민아");
        }
    }
}















//JQUERY 사용
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "#fed0f8");
    });

    $("input").blur(function () {
        $(this).css("background-color", "white");
    });
}); 