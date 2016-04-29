<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Регистрация</title>
 <script src="assets/javascript/bootstrap.min.js"></script>
 <link rel="stylesheet" href="assets/stylesheets/bootstrap.min.css">
</head>
    <body>
    <div class="row">
    <div class="container">
    <h4>Регистрация пользователей<a href="index.php"><small> Вернуться на главную страницу</small></a></h4>
    <?php include_once 'authorization.php';
    if (!isset($_SESSION['iduser'])){?>
	<form action="addusers.php" method="post">
	<div class="form-group">
	<label>Имя пользователя</label>
	<input name="nameuser" placeholder="Ваше имя" class="form-control">
	</div>
	<div class="form-group">
	<label>Логин</label>
	<input name="login" placeholder="Логин" class="form-control">
	</div>
	<div class="form-group">
	<label>Пароль</label>
	<input type="password" name="password" placeholder="Пароль" class="form-control"><br />
	<input type="password" name="confirm_password" placeholder="Повторите пароль" class="form-control">
	</div>
	<input type="submit" value="Зарегестрироваться" class="btn btn-default">
	</form>
	<?php } else echo "Вы успешно зарегестрировались"; ?> 
	<?php 
	include_once 'addusers.php';
	echo $_SESSION['msg'];
	unset($_SESSION['msg']);
	?>
	</div>
	</div>
    </body>

</html>