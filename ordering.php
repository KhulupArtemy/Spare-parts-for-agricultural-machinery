<?php
  $name = filter_var(trim($_POST['name']), 
  FILTER_SANITIZE_STRING);
  $phone_number = filter_var(trim($_POST['phone_number']), 
  FILTER_SANITIZE_STRING);
  $address = filter_var(trim($_POST['address']), 
  FILTER_SANITIZE_STRING);
  $delivery = filter_var(trim($_POST['delivery']), 
  FILTER_SANITIZE_STRING);
  $goods = filter_var(trim($_POST['goods']), 
  FILTER_SANITIZE_STRING);

  
  if (mb_strlen($name) < 3 || mb_strlen($name) > 20){
    echo "Недопустимое имя. ";
    ?>
    <a href="cart.php">Вернуться назад</a> 
    <?php 
    exit();
  }
  else if (mb_strlen($phone_number) < 9 || mb_strlen($phone_number) > 20){
    echo "Некорректный номер телефона.";
    ?>
    <a href="cart.php">Вернуться назад</a> 
    <?php 
    exit();
  }
  else if (mb_strlen($address) < 2 || mb_strlen($address) > 20){
    echo "Некорректный адрес.";
    ?>
    <a href="cart.php">Вернуться назад</a> 
    <?php 
    exit();
  }
  else if (mb_strlen($goods) < 18){
    echo "В корзине отсутствуют товары.";
    ?>
    <a href="cart.php">Вернуться назад</a> 
    <?php 
    exit();
  }
  
  $mysql = new mysqli('localhost', 'root', 'root', 'orders');
  $mysql->query("INSERT INTO `applications` (`name`, `phone_number`, `address`, `delivery`, `goods`)
  VALUES('$name', '$phone_number', '$address', '$delivery',  '$goods')");

  echo "Заказ успешно оформлен, спасибо за покупку!";
  ?>
  <a href="catalog.php">Вернуться в каталог</a> 
  <?php 
  exit();
  $mysql->close();
?>