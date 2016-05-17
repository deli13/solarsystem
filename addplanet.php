<html>
	<head>
		<meta charset="utf8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
		<script src="assets/javascript/bootstrap.min.js"></script>
		<script async src="assets/javascript/planet.js"></script>
		<link rel="stylesheet" href="assets/stylesheets/bootstrap.min.css">
	</head>
<body>
<?php session_start(); 
if (isset($_SESSION['loginuser'])){
	if ($_SESSION['loginuser']!='admin') header('Location: index.php');
} else header('Location: index.php');?>
<div class="container">
<h3 class="lead">Добавление и изменение информации о планетах<a href="index.php"><small>Вернуться на главную</small></a></h3>

<div class="input-group">
	<div class="input-group-btn">
	<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" >Выберите планету для редактирования<span class="caret"></span></button>
	<ul class="dropdown-menu">
		<li><a href="#" id="ssystem">Солнечная система</a></li>
		<li><a href="#" id="merkury">Меркурий</a></li>
		<li><a href="#" id="venus">Венера</a></li>
		<li><a href="#" id="earth">Земля</a></li>
		<li><a href="#" id="mars">Марс</a></li>
		<li><a href="#" id="jupiter">Юпитер</a></li>
		<li><a href="#" id="saturn">Сатурн</a></li>
		<li><a href="#" id="uran">Уран</a></li>
		<li><a href="#" id="neptun">Нептун</a></li>
	</ul>
	</div>
	<input type="text" id="nameplanet" name="nameplanet" class="form-control" readonly="true"><br />
</div><br />
<textarea id="descr" name="descr" class="form-control" rows="20"></textarea><br />
<button value="отправить" id="add" class="btn">Добавить</button>
<i id="msg"></i>

</div>
</body>
</html>