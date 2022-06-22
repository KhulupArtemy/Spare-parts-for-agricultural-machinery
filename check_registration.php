<?php
  $name = filter_var(trim($_POST['name']), 
  FILTER_SANITIZE_STRING);
  $login = filter_var(trim($_POST['login']), 
  FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['pass']), 
  FILTER_SANITIZE_STRING);
  
  if (mb_strlen($name) < 3 || mb_strlen($name) > 20){
    echo "Недопустимое имя (слишком короткое или длинное)";
    exit();
  }
  else if (mb_strlen($login) < 2 || mb_strlen($login) > 20){
    echo "Недопустимая длина логина";
    exit();
  }
  else if (mb_strlen($pass) < 2 || mb_strlen($pass) > 20){
    echo "Недопустимый пароль (от 2 до 20 символов)";
    exit();
  }

  $pass = md5($pass."1q2w3e4r");
  
  $mysql = new mysqli('localhost', 'root', 'root', 'regestrationbd');
  $mysql->query("INSERT INTO `users` (`name`, `login`, `pass`)
  VALUES('$name', '$login', '$pass')");

  $mysql->close();
?>