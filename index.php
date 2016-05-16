<html>
<title>solarsystem</title>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
 	<script src="assets/javascript/babylon.min.js"></script>
 	<script src="assets/javascript/bootstrap.min.js"></script>
 	<script async src="assets/javascript/main.js"></script>
 	<link rel="stylesheet" href="assets/stylesheets/bootstrap.min.css">
  	<link rel="stylesheet" href="assets/stylesheets/style.css">
	<meta charset="utf-8">
</head>
<body>
<div class="row">
<div class=col-md-8>
	<canvas id="renderCanvas"></canvas>
	<div class ="btn-blend">
		<input type="button" id="btnFullScreen" class="btn" value="Full Screen">
		<input type="button" id="arcrotate" class="btn" value="ArcRotateCamera">
		<input type="button" id="freecam" class="btn" value="FreeCamera">
	</div>
	
	<div id="scriptsrc">
		<script async src="assets/javascript/solarsystem.js" ID="scripts"></script>
	</div>
	<div id="descript">
	</div>
</div>
<div class=col-md-4>
<form action="authorization.php" method="post">
<?php require_once 'authorization.php'; 
if (isset($_SESSION['iduser'])){
	echo "<h3>Hello <small>".$_SESSION['msg']."</small></h3>";
 ?>
<input type="submit" name="dropsession" value="Выйти" class="btn btn-danger">
<?php } else{?>

	<div class="form-group">
		<label>Логин</label>
		<input name="login" class="form-control">
	</div>
	<div class="form-group">
		<label>Пароль</label>
		<input name="password" type="password" class="form-control"><br />
	</div>
		<input type="submit" class="btn btn-default" value="Войти">
		<a class="btn btn-info" href="registration.php" role="button" style="margin: 5px;">Зарегестрироваться</a>
<?php if (isset($_SESSION['msg'])) echo $_SESSION['msg'];
}?>
</form>
<input type="button" id="solarsys" class="btn btn-info" value="Солнечная система"><br />
<input type="button" id="merkury" class="btn btn-info" value="Меркурий"><br />
<input type="button" id="venus" class="btn btn-info" value="Венера"><br />
<input type="button" id="earth" class="btn btn-info" value="Земля"><br />
<input type="button" id="mars" class="btn btn-info" value="Марс"><br />
<input type="button" id="jupiter" class="btn btn-info" value="Юпитер"><br />
<input type="button" id="saturn" class="btn btn-info" value="Сатурн"><br />
<input type="button" id="uran" class="btn btn-info" value="Уран"><br />
<input type="button" id="neptun" class="btn btn-info" value="Нептун">
</div>
</div>
<div class="container">

<table class="table">
	<thead>
		<tr>
			<td>Комментарий</td>
			<td>Автор</td>
			<td>Время добавления</td>
		</tr>
	</thead>
	<tbody>
	<?php 
require_once 'dbconnect.php';
$query="select comments.text_comments, comments.created_at, users.nameuser from comments inner join users on comments.id_users=users.id_users";
$result=$connection->query( $query);
$rows=$result->num_rows;
for ($i=0; $i<$rows; ++$i){
	$result->data_seek($i);
	$row=$result->fetch_array(MYSQLI_ASSOC);

?>
	<tr>
		<td><?php echo $row['text_comments'];?></td>
		<td><?php echo $row['nameuser'];?></td>
		<td><?php echo $row['created_at'];?></td>
	</tr>
	<?php }
	$connection->close();?>
	</tbody>
</table>
<div class="jumbotron">
<?php if (isset($_SESSION['iduser'])) {?>
<form action="addcomments.php" method="post">
	<textarea name="comment" class="form-control"></textarea><br />
	<input type="submit" class="btn btn-default" value="Добавить комментарий">
</form>
<?php } else echo "<blockquote>Комментарии могут отправлять только зарегестрированные пользователи</blockquote>"?>
</div>
</div>
</body>
</html>