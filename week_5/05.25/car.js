
function show() {
    let model_info = document.getElementById("model_id").value;
    let speed_info = document.getElementById("speed_id").value;
    let color_info = document.getElementById("color_id").value;
    document.getElementById("display1").innerHTML = model_info;
    document.getElementById("display2").innerHTML = speed_info;
    document.getElementById("display3").innerHTML = color_info;

    MyCar.model = model_id;
    MyCar.speed = spped_id;
    MyCar.color = color_id;
}


let MyCar = {

    model: "벤츠",
    speed: 1900,
    color: "검정",
    brake: function () { this.speed -= 10; alert("속도가 감속된다."); },
    accel: function () { this.speed += 10; alert("속도가 가속된다."); },
    setInfo: function (m, s, c) { this.model = m; this.speed = s; this.color = c; },
    putinfo: function () {
        document.getElementById("display1").innerHTML = this.model;
        document.getElementById("display2").innerHTML = this.speed;
        document.getElementById("display3").innerHTML = this.color;
    }

}



