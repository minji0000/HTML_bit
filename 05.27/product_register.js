let today = Date();
var ProductContainer = new Array();//객체배열생성

var count = 0;//현재까지 저장된객체의 갯수를 저장


// 지금은 안 쓰이는 객체
let product_info = {
    name: "",
    make: "",
    price: "",

    putdata: function () {
        document.getElementById("dis1").innerHTML = this.name;
        document.getElementById("dis2").innerHTML = this.make;
        document.getElementById("dis3").innerHTML = this.price;
        document.getElementById("dis4").innerHTML = today;
    },

    show: function () {

        let name_info = document.getElementById("name").value;
        let make_info = document.getElementById("make").value;
        let price_info = document.getElementById("price").value;


        document.getElementById("dis1").innerHTML = name_info;
        document.getElementById("dis2").innerHTML = make_info;
        document.getElementById("dis3").innerHTML = price_info;
        document.getElementById("dis4").innerHTML = today;

    }

}

// 여기가 지금 쓰이는 중 !

let Search_Container = new Array();

let chip = {

    show: function () {

        search_name = document.getElementById("name").value;
        Search_Container[0] = document.getElementById("name").value;
        Search_Container[1] = document.getElementById("make").value;
        Search_Container[2] = document.getElementById("price").value;


    },

    show2: function () {

        search_name = document.getElementById("name").value;
        if (search_name == ProductContainer[0]) {
            document.getElementById("arr1").innerHTML = ProductContainer[0];
        } else {
            document.getElementById("arr1").innerHTML = "그런 과자는 없어.";
        }
    },

    show3: function () {
        for (i = 0; i < Search_Container.length; i++) {

            document.getElementById("arr1").innerHTML = Search_Container;

        }

    }
}

/*
let plus = document.getElementById("name").value;

function plus() {
    console.count(a);
}

console.count(a);
console.count("딸기");

let save = new Array();
save[0] = a;

console.log(save);


function save() {
    count++
    let name_info = document.getElementById("name").value;
    let make_info = document.getElementById("make").value;
    let price_info = document.getElementById("price").value;
}

*/

// var ProductContainer = new Array();//객체배열생성

// var count = 0;//현재까지 저장된객체의 갯수를 저장

//===============================

//반복문으로 여러개의 객체를 출력(객체배열에 저장된갯수만큼 반복: ProductContainer.length)

//===============================

//물건정보객체생성

function Product(n, m, p) {

    this.Name = n; this.Manufacture = m; this.Price = p;

    this.putdata = function () { document.write("<h2>" + this.Name + " " + this.Manufacture + " " + this.Price + "</h2>"); }

}

function register() {

    count++;//현재까지 등록된 물건갯수

    var get_product_name = document.getElementById("p_name_id").value;//입력데이터->임시변수
    alert(get_product_name);

    var get_product_manufac = document.getElementById("p_manufac_id").value;//입력데이터->임시변수
    alert(get_product_manufac);
    var get_product_price = document.getElementById("p_price_id").value;//입력데이터->임시변수
    alert(get_product_price);
    var NewObject = new Product(get_product_name, get_product_manufac, get_product_price);

    ProductContainer.push(NewObject);

}

function print_table() {

    document.getElementById("table_div").innerHTML = "";//일단 출력하는곳을 청소한다.(cleanning)

    var str = "";//여기에 html들을 계속누적시킬것임.  

    var str = "<table border=1><tr><th>과자이름</th><th>제조사</th><th>가격</th></tr>";

    for (var x = 0; x < ProductContainer.length; x++) {

        str += "<tr><td>" + ProductContainer[x].Name

            + "</td><td>" + ProductContainer[x].Manufacture + "</td><td>" + ProductContainer[x].Price + "</td></tr>";

    }

    str += "</table>";

    document.getElementById("table_div").innerHTML = str;//현재까지 쌓인문자열을 출력한다.

}

/*
function search() {
    let search_name = document.getElementById("search_name").value;
    for (let i = 0; i < ProductContainer.length; i++) {
        if (search_name == ProductContainer[i]) {
            alert("찾았다!");
            return;
        } if ((ProductContainer.length - 1) == x) {
            alert("과자없어");
        }
    }
} */

function search_name() {

    var your_search_name = document.getElementById("p_search_name_id").value;//검색어를 변수에저장함.

    //객체의 갯수만큼 반복문을 돌려서 해당상품이름을 찾는다.

    for (var x = 0; x <= ProductContainer.length; x++) {
        alert(x);

        if (ProductContainer[x].Name == your_search_name)//찾는상품이름이 일치한다면...

        {

             alert("찾았다...");

             return;//찾았으면 더이상 반복문을 작동시킬필요가없으니 search_name함수를 중단하자! 

        }

        //만약, 못찾았을때는 없다고 출력함.(이건 반복문의 끝까지 작동했는지를 검사해서 알아낼수있다.)

        //반복문을 끝까지돌면 인덱스(x)가 ProductContainer보다 1만큼 작을것이다.

        //반복문의 조건이 애초에 객체의갯수보다 1작을때까지 작동하는것이다.

        //if ((ProductContainer.length - 1) == x) { alert("없다"); }

    }
    alert("끝" + x);
}