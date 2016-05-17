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
	
if (isset($_POST['nameplanet']) && isset($_POST['descr'])){
	$namep=valid_insert($_POST['nameplanet']);
	$descr=valid_insert($_POST['descr']);
	$query_sel="select name_planet from planet where name_planet='".$namep."'";
	$result_sel=$connection->query($query_sel);
	$rows=$result_sel->num_rows;
	if ($rows<1){ 
		$query_ins="insert into planet(name_planet, description) values('".$namep."', '".$descr."')";
		$result_ins=$connection->query($query_ins);
		if (!$result_ins){
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