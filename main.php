<html>
<head>
<meta charset="utf8">
</head>
<body>
<?php

function wtfman($whatsupman){   //ёбаная функция которая делает какую то дичь
	$man = "hello man what a fuck ";
	return $man.$whatsupman." ".time();
}
global $hueta;
define("MYSQL_USERS", "root"); //константа
$number= 18.5;
$user = "<br /> упырь <br />";
$array= array("Hello", "world", 5); //массив
// echo $array[0];
$named= <<<_END
вывод какой то дичи 
/*echo $user;
echo "Hello  world!"; <br />
echo \$user;
echo \$number;*/
?>
Выводит какую то хрень 
_END;
// ^ввод документа
echo "<br />".wtfman(MYSQL_USERS). "<br />"; 
//echo $named;
echo $user;
echo "вывод символа строки " . substr($named, 8 , 10)."<br />";
$tm=5;
echo $tm<5 ? "меньше 5":"Больше или равно 5" //условный оператор

?>
</body>
</html>