let totalVal = 0;
let countPeople = 0;
let count = 0;

let age10Val = 0;
let age20Val = 0;
let age30Val = 0;
let age40Val = 0;
let age50Val = 0;

let age10People = 0;
let age20People = 0;
let age30People = 0;
let age40People = 0;
let age50People = 0;
$(document).ready(function () {
  $('#btn1').click(function () {
    countPeople++;
    count++;
    // getter
    let starVal = $('input[name="rating"]:checked').val();
    totalVal += Number(starVal);
    console.log(totalVal);
    console.log(starVal);
    let age = $('#age').val();
    if (age == "10") {
      age10Val = age10Val + Number(starVal);
      age10People++;
    } else if (age == "20") {
      age20Val = age20Val + Number(starVal);
      age20People++;
    } else if (age == "30") {
      age30Val = age30Val + Number(starVal);
      age30People++;
    } else if (age == "40") {
      age40Val = age40Val + Number(starVal);
      age40People++;
    } else {
      age50Val = age50Val + Number(starVal);
      age50People++;
    }
    let str = "";
    str = "<span class='g_term'>10대</span><span class='g_bar' style='width:" + Math.floor(age10Val / age10People * 20) + "%'><span>" + Math.floor(age10Val / age10People * 20) + "%</span></span></li>"
    $('#age10').html("");
    $('#age10').html(str);

    str = "<span class='g_term'>20대</span><span class='g_bar' style='width:" + Math.floor(age20Val / age20People * 20) + "%'><span>" + Math.floor(age20Val / age20People * 20) + "%</span></span></li>"
    $('#age20').html("");
    $('#age20').html(str);

    str = "<span class='g_term'>30대</span><span class='g_bar' style='width:" + Math.floor(age30Val / age30People * 20) + "%'><span>" + Math.floor(age30Val / age30People * 20) + "%</span></span></li>"
    $('#age30').html("");
    $('#age30').html(str);

    str = "<span class='g_term'>40대</span><span class='g_bar' style='width:" + Math.floor(age40Val / age40People * 20) + "%'><span>" + Math.floor(age40Val / age40People * 20) + "%</span></span></li>"
    $('#age40').html("");
    $('#age40').html(str);

    str = "<span class='g_term'>50대</span><span class='g_bar' style='width:" + Math.floor(age50Val / age50People * 20) + "%'><span>" + Math.floor(age50Val / age50People * 20) + "%</span></span></li>"
    $('#age50').html("");
    $('#age50').html(str);



    let review_text = "<p>" + $('#review').val() + "</p>";
    console.log(review_text);
    str = "";
    str = "<p class='star_rate'>";
    for (i = 0; i < starVal; i++) {
      str = str + "<a href='#' class='on'>★</a>";
    }
    for (i = starVal; i < 5; i++) {
      str = str + "<a href='#'>★</a>";
    }
    str = str + review_text;
    str = str + "</p><hr>";

    $('#review_ul').append($("<li id=li" + count + ">"));
    $('#li' + count).html(str);

    str = "";
    let review_rate = (totalVal / countPeople).toFixed(2);
    str = "<p>관람객 평점 " + review_rate + "</p><p class='star_rate'>";
    for (i = 0; i < Math.floor(review_rate); i++) {
      str = str + "<a href='#' class='on'>★</a>";
    }
    for (i = review_rate; i < 5; i++) {
      str = str + "<a href='#'>★</a>";
    }
    str = str + "</p>";
    $('#review_rate').html("");
    $('#review_rate').html(str);
  });

})