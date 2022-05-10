function databox() {
    console.log("jjj")
    var animal = document.getElementById("animal").value;
    //var new_animal = animal.value;
    alert(animal);
};

function Activate_Filters() {
    alert(document.getElementById("fruit").value);
    data = (document.getElementById("fruit").value);
    var new_data;
    new_data = data.trim();
    alert(new_data);

    if (new_data == "") {
        alert("empty!!");
        return false;
    }
};


/* function blank() {
    var blank_pattern = /[\s]/g;
    if (blank_pattern.test(animal) == true) {
        alert('공백이 입력되었습니다.')
        return false;
    }

    if (new_data == " ") {
        alert("empty!!");
        return false;
    }
}; */