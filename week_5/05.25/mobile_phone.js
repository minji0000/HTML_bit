function set_phone() {
    model_info = document.getElementById("model").value;
    color_info = document.getElementById("color").value;
    price_info = document.getElementById("price").value;

    document.getElementById("dis1").innerHTML = this.model_info;
    document.getElementById("dis2").innerHTML = this.color_info;
    document.getElementById("dis3").innerHTML = this.price_info;
}
