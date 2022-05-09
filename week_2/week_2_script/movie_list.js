// 자바스크립트로 토글기능 구현하기 (상식 중에 하나)
var sw = "off";
if (sw == "off") { sw = "on"; alert(sw); }
else if (sw == "on") { sw = "off"; alert(sw); }
else { alert("비정상작동중입니다."); }










document.getElementById("logo").style.height = "400px";
document.getElementById("one").style.width = "400px";
document.getElementById("two").style.width = "400px";
document.getElementById("two").style.height = "572px";
document.getElementById("three").style.width = "400px";
document.getElementById("list").style.color = "white";



$(document).ready(function () {
    $("#one").click(function () {
        $("#one").slideUp(1000);
    });

    $("#two").click(function () {
        $("#two").slideUp(1000);
    });

    $("#three").click(function () {
        $("#three").slideUp(1000);
    });

    $("#logo").click(function () {
        $("#one").show(1000);
    });

    $("#logo").click(function () {
        $("#two").show(1000);
    });

    $("#logo").click(function () {
        $("#three").show(1000);
    });


    $("#btn1").click(function () {
        $("#one").remove();
        $("#merry").remove();
    });

    $("#btn2").click(function () {
        $("#three").remove();
        $("#aladin").remove();
    });

});