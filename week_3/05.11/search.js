let members =
    [
        ["민지", "서울", "0000", "ming", "blue"],
        ["토끼", "당근", "0001", "rabbit", "pink"],
        ["양", "풀", "0002", "mee", "white"],
        ["거북이", "바다", "0003", "turtle", "green"],
        ["사슴", "숲", "0004", "bbul", "brown"]
    ];



function find_this() {
    let search_word = document.getElementById("id_search_box").value;
    for (i = 0; i < members.length; i++) {
        for (j = 0; j < 5; j++) {

            if (search_word == members[i][j]) {
                alert("찾음");
                return false;
            }
            else {
                alert("없음");
                continue;
            }
        }
    }
} 