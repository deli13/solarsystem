<html>
<title>solarsystem</title>
<head>
 <script src="assets/javascript/babylon.min.js"></script>
 <script src="assets/javascript/bootstrap.min.js"></script>
 <link rel="stylesheet" href="assets/stylesheets/bootstrap.min.css">
  <link rel="stylesheet" href="assets/stylesheets/style.css">
	<meta charset="utf-8">
</head>
<body>
<div class="row">
<div class=col-md-8>
<canvas id="renderCanvas"></canvas>
<script src="assets/javascript/solarsystem.js"></script>
</div>
<div class=col-md-4>
<form action="authorization.php" method="post">
<div class="form-group">
<label>Логин</label>
<input name="login" class="form-control">
</div>
<div class="form-group">
<label>Пароль</label>
<input name="password" class="form-control"><br />
</div>
<input type="submit" class="btn btn-default" value="Войти">
<?php 
include_once 'authorization.php';
echo $_SESSION['msg']?>
</form>
</div>
</div>
</body>
</html>