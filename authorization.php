<?php
require_once 'dbconnect.php';
if (!isset($_SESSION)) session_start();



if (isset($_POST['login']) && isset($_POST['password'])){
	$login=valid_insert($_POST['login']);
	$password=valid_insert($_POST['password']);
	$query="select id_users, login from users where login='".$login."' and u_password='".$password."'";
	$result=$connection->query($query);
	$rows=$result->num_rows;
	for ($i=0; $i<$rows; ++$i){
		$result->data_seek($i);
		$row=$result->fetch_array(MYSQLI_ASSOC);
		$loginpost=$row['login'];
		$idpost=$row['id_users'];
	}
	if (($idpost!=Null) && ($loginpost!=Null)){
		$_SESSION['iduser']=$idpost;
		$_SESSION['loginuser']=$loginpost;
		$_SESSION['msg']=$loginpost;
		header("Location: index.php");
	} else {
		$_SESSION['msg']="ошибка авторизации";
		header("Location: index.php");
	}

	
}

if (isset($_POST['dropsession'])){
	session_destroy();
	header("Location: index.php");
}
?>