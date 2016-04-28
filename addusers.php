<?php
require_once 'dbconnect.php';

function validinsert($valid){
	$codevalid=stripcslashes($valid);
	$codevalid=htmlentities($codevalid);
	return $codevalid;

}
session_start();

if ($connection->connection_error) die($connection->connection_error);
if (($_POST['password']==$_POST['confirm_password']) && $_POST['password']!=Null){
	if (isset($_POST['nameuser']) && (isset($_POST['login'])) && (isset($_POST['password']))){
		$nameuser=validinsert($_POST['nameuser']);
		$login=validinsert($_POST['login']);
		$password=validinsert($_POST['password']);
		$query="insert into users set nameuser='".$nameuser."', u_password='".$password."', login='".$login."'";
		$result=$connection->query($query);
			if (!$result) $_SESSION['msg']="Проблема в подключение обратитесь к администратору ресурса";
			else $_SESSION['msg']="Вы зарегестрированы";
		$connection->close();
		header("Location: registration.php");
	} else $_SESSION['msg']="Введены не все данные для регистрации";
	header("Location: registration.php");
} elseif ($_POST['password']!=$_POST['confirm_password'])
{$_SESSION['msg']="Пароли не совпадают";
header("Location: registration.php");
} elseif (isset($_POST['password'])){$_SESSION['msg']="Пароль не может быть пустым";
unset($_POST['password']);
header("Location: registration.php");
}

?>