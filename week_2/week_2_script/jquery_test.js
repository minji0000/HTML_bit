$(document).ready(function () {
    $("#show").click(function () {
        $("p").show(3000); //3초동안 다시 보여진다.
    });

    $("p").click(function () {
        $(this).hide();
    });
    /*
    $("#hide").click(function () {
        $(this).hide();
    });
    $("hr").click(function () {
        $(this).hide();
    }); */
}); 