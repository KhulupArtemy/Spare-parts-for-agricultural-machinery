<?php
  $login = filter_var(trim($_POST['login']), 
  FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['pass']), 
  FILTER_SANITIZE_STRING);

  $pass = md5($pass."1q2w3e4r");

  $mysql = new mysqli('localhost', 'root', 'root', 'regestrationbd');
  $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'");
  $user = $result->fetch_assoc();

  if (count($user) == 0){
    echo "Такой пользователь не найден";
    exit();
  }

  print_r($user);
  exit;
  setcookie('user', $user['name'], time() + 3600, "/");

  $mysql->close();
?>