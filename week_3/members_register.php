<?php

$NAME = $_POST["name"]; 
$ADRESS = $_POST["adress"];
$NUMBER = $_POST["number"]; 
$ID = $_POST["id"];
$PW = $_POST["pw"]; 

echo "<h1>" . $NAME;
echo "<hr>";
echo "<h2>" . $ADRESS;
echo "<hr>";
echo "<h2>" . $NUMBER;
echo "<hr>";
echo "<h5>" . "<font color ='blue'>". $ID . "</font>";
echo "<hr>";
echo "<h5>" . "<font color ='red'>". $PW . "</font>" ;
echo "<hr>";

if($ID=="admin") {
    if($PW=="1234")
    echo("<font color ='green'>" . $ID . "</font>"); 
}


for($i=0; $i < strlen($PW); $i++) {
    $star= $star . "*";
}

echo "<hr>";
echo ( "$star"); 



?>