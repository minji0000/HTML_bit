$(document).ready(function () {
    $("#bt1").click(function () {
        $("#mymenu").hide(2000);
    });

    $("#bt2").click(function () {
        $("#mymenu").show(2000);
    });

    $("#show").click(function () {
        $("#show").slideToggle(2000);
    });
});


