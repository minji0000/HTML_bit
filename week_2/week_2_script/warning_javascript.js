// alert는 경고창을 띄우는 것
//function xxx() { alert("자바스크립트 함수 작동!"); }
//function xxx2() { alert("자바스크립트 함수 작동!"); }
//function xxx3() { alert("자바스크립트 함수 작동!"); }
//function xxx4() { alert("자바스크립트 함수 작동!"); }
// 이 파일 (.js) 안에는 우리가 원하는 자바스크립트 코드를 테스트 할 수 있다.
//alert("자바스크립트 함수 작동!");

//프로그래밍 언어에서 가장 중요한 것은? (데이터 처리)
// 데이터를 저장할 수 있는 곳은? (변수, 배열, 객체)
// 변수에 어떤 데이터를 저장해봅시다.
/*data = 290;
data2 = 3;
data3 = 'abc';
data4 = 0.12345; */

//alert(data + data3);
//alert(data + data2);

/* alert(data + data2);
alert(data - data2);
alert(data * data2); */

//result = (data / data2);
//result2 = Math.round(result);

//alert(Math.round(result2)); // 나눗셈 결과를 자연수 한 자리까지 반올림

//cars = ["Saab", "Volvo", "BMW"];
//function ShowData() {
//    document.write(cars[1]); }

/* document.write(cars[0] + "<br>");
document.write(cars[1] + "<br>");
document.write(cars[2] + "<br>"); */

cars = ["벤츠", "마세라티", "벤틀리"];
/*alert(cars[0]);
alert(cars[1]);
alert(cars[2]); 

//자바스크립트의 if문을 사용해서 조건을 처리할 수 있는지 확인해봅시다.

let data = "d";
if (data == "ABC") {
    alert(data);
}
else if (data == "DE") {
    alert(data);
}
else {
    alert("no");
}
*/

// 중첩 IF
data2 = -10
if (data2 <= 100) {

    if (data2 >= 1) {
        alert("ok")
    }
}

/*
 다이나믹 변수 자동생성 변수
let loop=3;
for (loop = 3; loop >= 1; loop--) {
    alert("현재 숫자는 " + loop);
} 

//1씩 증가하는 스타일
var loop = 1;
while (loop2 <= 2) {
    alert(loop);
    loop++;
}

// syntax (문법에러)
//1씩 감소하는 스타일
var loop2 = 2;
while (loop2 > 0) {

    alert(loop2);
    loop2--;
} 
//for 와 if 의 조합
//1부터 2까지 반복문을 실행시킨다.
//만약 loop 변수의 데이터가 2가 되면, 경고창(alert)을 출력시킨다.
var loop = 0;
for (loop = 1; loop <= 2; loop++) {
    if (loop == 2) {
        alert("loop is 2");
    }
}
// 3부터 9까지 반복문을 실행시킨다.
// 만약 loop 변수의 데이터를 2로 나눴을 때 나머지가 1이면(홀수이면) 경고창으로 출력한다.
for (loop = 3; loop <= 9; loop++) {
    if ((loop % 2) == 1) { alert(loop); } // 3.5.7.9 출력
} 
//만약 로그인한 사용자의 아이디가 "admin" 이면 "관리자입니다." 출력
//만약 "admin" 이 아니면, "web_admin"인가? 그렇다면 "웹관리자입니다." 출력
// 만악 wed_admin도 아니라면, "일반유저입니다." 출력
var u_id = "admin"
if (u_id == "admin") {
    alert("관리자입니다.");
}
else if (u_id == "web_admin") { alert("웹 관리자입니다."); }
else { alert("일반유저입니다."); } 

//=======================================
//유저들의 아이디가 저장된 배열을 하나 만들어주세요.
users = ["admin", "web_admin", "user", "hacker1", "hacker2"];
//3명의 아이디를 출력해보세요. for을 사용헤서 처리해야 합니다.
for (loop = 0; loop <= 2; loop++) {
    //만약 "web_admin" 이면 "웹 관리자입니다." 출력
    //    alert(users[loop]);
    if (users[loop] == "user") {
        alert(users[loop] + " 입니다.");
        break;
    }
    //alert("#");




} */


users = [100, -90, 0.1234, "관리자", 'x'];
for (loop = 0; loop <= 2; loop++) {
    alert(users[3]);
}
