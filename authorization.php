<?php
require_once 'dbconnect.php';
session_start();

function validinsert($valid){
	$codevalid=stripcslashes($valid);
	$codevalid=htmlentities($codevalid);
	return $codevalid;
}

if (isset($_POST['login']) && isset($_POST['password'])){
	$login=validinsert($_POST['login']);
	$password=validinsert($_POST['password']);
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
?>