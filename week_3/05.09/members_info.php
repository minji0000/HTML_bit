<?php
$ID = $_POST["user_id"]; 
$PW = $_POST["user_pw"];
echo $_POST["user_id"];
echo $_POST["user_pw"];

echo "<h1>" . $ID . "</h1>"; // 개발용 코드
echo "<h2>" . $PW. "<h2>"; //개발용코드

    if($ID=="admin") {

        if($PW=="1234")
        {
        echo("<font color = 'blue' size='5'>관리자 안녕?</font>"); 
        }

    }
?>