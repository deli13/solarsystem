<?php
require_once 'dbconnect.php';
//require_once 'authorization.php';
if (!isset($_SESSION)) session_start();

if (isset($_POST['comment'])){
	$comment=valid_insert($_POST['comment']);
	$query="insert into comments set text_comments='".$comment."', id_users=".$_SESSION['iduser'];
	$result=$connection->query($query);
	if (!$result) $_SESSION['msgcom']="ошибка добавления";
	header("Location: index.php");
} else header("Location: index.php");
?>