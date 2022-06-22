<?php
    $connection = mysqli_connect('127.0.0.1:3306','root','root','search');

    if (isset($_POST['search_btn'])){ //Если мы нажали на кнопку
        $search = $_POST['search'];
        $query_goods = mysqli_query($connection, "SELECT * FROM goods WHERE name = '$search'");
    }
    else{ //Если не нажали на кнопку
		//echo "Товар не найден";
        $query_goods = mysqli_query($connection, "SELECT * FROM goods");
    }
?>
<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <title>Купить запчасти для сельхозтехники</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
	<body>
        <div id="header">
		<a class="name-shadow-polka-dot">Запчасти к сельхозтехнике</a>
		</div>
		<div id="menu">
			<center>
			<a href="http://mysite"><button class="menu_btn">Главная</button></a>
			<a href="catalog.php"><button class="menu_btn">Каталог</button></a>
			<a href="delivery.php"><button class="menu_btn">Доставка</button></a>
			<a href="about_site.php"><button class="menu_btn">О сайте</button></a>
			<form style="float: right; margin-top: -5px; margin-right: 20px" action="search.php" method="POST">
				<span><input type="search" name="search" placeholder="Введите искомый товар"></span>
				<span><a href="search.php"><button class="menu_btn" name="search_btn">Поиск</button></a></span>
			</form>
			<a href="cart.php"><button class="menu_btn">Корзина</button></a>	
			</center>						
		</div>
		<div id="main">
            <?php
            $query_goods;
            while($good = mysqli_fetch_assoc($query_goods)){?>
				<?php //echo $good['file'] ?>
                <div id="<?php echo $good['file'] ?>"></div>
                <?php
            }
            ?>
		</div>
		<div id="footer"></div>
			<b><ul style="color: #ee9207; font-size: 16px; margin-top: -50px; padding: 20px; list-style-type: none;" >
				<li><img src="images/contact_number.png" style="margin-right: 0px;"></img>+375 44 55 444 55</li>
				<li><img src="images/address.png" style="margin-right: 0px;"></img>г. Минск, ул. Домбровская, 10</li>
				<li><img src="images/mail.png" style="margin-right: 0px;"></img>selhoz.shop@gmail.com</li>
			</ul></b>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="js/mysite.js"></script>
		<script src="js/allGoodsLoad.js"></script>
    </body>
</html>