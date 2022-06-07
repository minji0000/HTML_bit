
var ProductContainer = new Array();//객체배열생성
let count = 0;

function Product(n, p, m, d) {
    this.Name = n;
    this.Price = p;
    this.Manufac = m;
    this.Date = d;
}

function register() {
    count++;
    let get_name = document.getElementById("name").value;
    let get_price = document.getElementById("price").value;
    let get_manufac = document.getElementById("manufac").value;
    let get_date = document.getElementById("date").value;

    let NewObject = new Product(get_name, get_price, get_manufac, get_date);
    ProductContainer.push(NewObject);
}

function print_table() {

    var str = "";
    var str = "<table border=1> <th>이름</th> <th>가격</th><th>제조사</th> <th>유통기한</th>";

    for (var i = 0; i < ProductContainer.length; i++) {
        str += "<tr><td>" + ProductContainer[i].Name + "</td>"
            + "<td>" + ProductContainer[i].Price + "</td>"
            + "<td>" + ProductContainer[i].Manufac + "</td>"
            + "<td>" + ProductContainer[i].Date + "</td></tr>";
    }

    str += "</table><br>";

    document.getElementById("table_div").innerHTML = str;
}

function search() {
    var search = document.getElementById("search_name").value;
    //var search = $("#search_name").val(); 이 위의 문법과 같다
    for (let i = 0; i < ProductContainer.length; i++) {

        if (search == ProductContainer[i].Name) {
            alert("찾음");
        } else {
            alert("업서");
        }

    }

}