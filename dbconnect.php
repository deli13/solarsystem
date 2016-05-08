<?php
$dbhost='localhost';
//$dbname='bsvtdmod_solarsystem';
//$dbuser='bsvtdmod_dbcon';
//$dbpass='qwe!@#RTY456';
 $dbname='solarsystem';
 $dbuser='root';
 $dbpass='1234';
$connection=new mysqli($dbhost, $dbuser, $dbpass, $dbname);

function valid_insert($validtext){
		$codevalid=stripcslashes($validtext);
		$validtext=htmlentities($codevalid);
		return $validtext;
}
?>