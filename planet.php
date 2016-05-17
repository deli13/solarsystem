<?php
require_once 'dbconnect.php';
//if (!isset($_SESSION))session_start();
if (isset($_REQUEST['planet'])){ $ajax_query_planet = $_REQUEST['planet'];
if ($ajax_query_planet!='') {
	$query = "select description from planet where name_planet='".$ajax_query_planet."'";
	$result = $connection->query($query);
	if (!$result){ echo "result пуст"; } else {
	$rows = $result->num_rows;
	for ($i=0; $i<=$rows; ++$i){
		$result->data_seek($i);
		$row = $result->fetch_array(MYSQLI_ASSOC);
		echo $row['description'];
	}}}}
//if (isset($_POST['nameplanet']) && isset($_POST['descr'])) {
//$nameplanet = valid_insert($_POST["nameplanet"]);
//$descr = valid_insert($_POST["descr"]);
//$query = "insert into planet(name_planet, description) values('".$nameplanet."', '".$descr."')";
//echo $query."<br />";
//$result = $connection->query($query);
//if (!$result) {
//	//$_SESSION['msg_planet'] = "запись не добавлена";
//	echo " error";
//} else echo "Запись добавлена";//header("Location: addplanet.php");
//}


	
if (isset($_POST['nameplanet']) && isset($_POST['descr'])){
	$namep=valid_insert($_POST['nameplanet']);
	$descr=valid_insert($_POST['descr']);
	$query_sel="select name_planet from planet where name_planet='".$namep."'";
	$result_sel=$connection->query($query_sel);
	if (!$result_sel){ 
		$query_ins="insert into planet(name_planet, description) values('".$namep."', '".$descr."')";
		$result_ins=$connection->query($query_ins);
		if (!$result){
			echo "Запись не добавлена";
		} else {
			echo "Запись добавлена";
		}
	}
	else {
		$query_upd="update planet set description='".$descr."' where name_planet='".$namep."'";
		$result_upd=$connection->query($query_upd);
		if (!$result_upd){
			echo "Запись не изменена";
		}
		else {
			echo "Запись изменена";
		}
	}
}

?>