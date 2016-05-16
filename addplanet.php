<html>
	<head>
		<meta charset="utf8">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
		<script src="assets/javascript/bootstrap.min.js"></script>
		<link rel="stylesheet" href="assets/stylesheets/bootstrap.min.css">
	</head>
<body>
<div class="container">
<p class="lead">Добавление и изменение информации о планетах</p>
<form action="planet.php" method="post">
<input type="text" id="nameplanet" name="nameplanet" class="form-control"><br />
<textarea id="descr" name="descr" class="form-control"></textarea><br />
<input type="submit" value="отправить" id="add" class="btn"> <?php if (isset($_SESSION['msg_planet'])) echo $_SESSION['msg_planet'] ?>
</form>
</div>
</body>
</html>