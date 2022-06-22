<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <title>Корзина</title>
		<link rel="stylesheet" href="css/cart_style.css">
    </head>
	<body>
        <div id="header">
		<a class="name-shadow-polka-dot">Запчасти к сельхозтехнике</a>
		</div>
		<div id="main">
			<div id="my-cart"></div>
			<br><button href="#" class="button open-popup menu_btn">Приобрести</button>
			<div style="background-image: url(images/back.png); height: 20px; margin-top: 20px;"></div>
			<div class="popup-bg">
  				<div class="popup">
    				<img style="height: 50px; width: 50px; margin-top: -20px" class="close-popup" src="images/close.png" alt="icon">	
					<form action="ordering.php" method="post">
						<input type="text" name="name" id="name" placeholder="Ваше имя">
						<input type="text" name="phone_number" id="phone_number" placeholder="Ваш телефон">
						<input type="text" name="address" id="address" placeholder="Ваш адрес">
						<select type="text" name="delivery" id="delivery">
  							<option>Доставка</option>
  							<option>Самовывоз</option>
						</select>
						<div id="goods_load"></div>
						<button class="menu_btn" style="margin: 0px; padding: 0px;">Оформить заказ</button>
					</form>
  				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="js/cart.js"></script>
		<script src="js/cart_modul.js"></script>
    </body>
</html>