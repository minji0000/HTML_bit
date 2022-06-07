
$(document).ready(function () {

    $("#분야보기").hover(function () {
        $("#in_분야보기").css("display", "block");
    }, function () {
        $("#in_분야보기").hide();
    });

    $("#추천마법사").hover(function () {
        $("#in_추천마법사").css("display", "block");
    }, function () {
        $("#in_추천마법사").hide();
    });

    $("#베스트셀러").click(function () {
        $("#in_베스트셀러").toggle();
    });

    $("#새로나온책").hover(function () {
        $("#in_새로나온책").css("display", "block");
    }, function () {
        $("#in_새로나온책").hide();
    });

    $("#이벤트").hover(function () {
        $("#in_이벤트").css("display", "block");
    }, function () {
        $("#in_이벤트").hide();
    });

    $("#추천도서").hover(function () {
        $("#in_추천도서").css("display", "block");
    }, function () {
        $("#in_추천도서").hide();
    });


    //-------------------------------------------

    $("#베스트셀러").click(function () {
        $("display").toggle();
    });


    $("#국내베스트").hover(function () {
        $("#best1").css("display", "block");
        $("#dis").hide();
    }, function () {
        $("#best1").hide();
        $("#dis").show();

    });


    $("#해외베스트").hover(function () {
        $("#best2").css("display", "block");
        $("#dis").hide();
    }, function () {
        $("#best2").hide();
        $("#dis").show();
    });

});


var slideWrapper = document.querySelector('.container');
var slides = document.querySelectorAll('.item');
var totalSlides = slides.length; // item의 갯수


var sliderWidth = slideWrapper.clientWidth; // container의 width
var slideIndex = 0;
var slider = document.querySelector('.slider');

slider.style.width = sliderWidth * totalSlides + 'px';

showSlides()

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slider.style.left = -(sliderWidth * slideIndex) + 'px';
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 2000);
}


