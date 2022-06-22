<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <title>Доставка товаров</title>
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
            <div style="margin-left: 25px; padding-top: 1px; font-size: 24px">
            <h2>Доставка курьером до клиента</h2>
            <a>Мы доставим вашу покупку в любую точку Беларуси. Чтобы узнать подробности доставки, вы можете написать на почту или позвонить на номер телефона, указанные на странице ниже. При заказе товаров с доставкой доступны все формы оплаты.</a><br>
            <ul class="element" type="square">Цена:
                <li style="display: block;"> • общая стоимость товаров 75.00$ и более — бесплатно,</li>
                <li style="display: block;"> • менее 75.00$ — 5.00$,</li>
                <li style="display: block;"> • менее 50.00$ — 6.00$,</li>
                <li style="display: block;"> • менее 25.00$ — 7.00$.</li>
            </ul>
            <h2>Самовывоз</h2>
            <a>Самовывоз — это возможность получить покупку в кратчайшие сроки из пунктов выдачи заказов и сэкономить на доставке. Для получения товара необходимо назвать номер телефона, на который оформлен заказ. Пункт выдачи указан ниже, график работы 8:00 — 20:00 Пн-Пт. При заказе товаров с самовывозом также доступны все формы оплаты.</a><br><br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.041337373599!2d27.45444111603714!3d53.91324133979754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc52bfda994bb%3A0x67b23ee8e9d1c0ff!2z0YPQuy4g0JTQvtC80LHRgNC-0LLRgdC60LDRjyAxMCwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1636386962574!5m2!1sru!2sby" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
		</div>
		<div id="footer"></div>
			<b><ul style="color: #ee9207; font-size: 16px; margin-top: -50px; padding: 20px; list-style-type: none;" >
				<li><img src="images/contact_number.png" style="margin-right: 0px;"></img>+375 44 55 444 55</li>
				<li><img src="images/address.png" style="margin-right: 0px;"></img>г. Минск, ул. Домбровская, 10</li>
				<li><img src="images/mail.png" style="margin-right: 0px;"></img>selhoz.shop@gmail.com</li>
			</ul></b>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="js/mysite.js"></script>
    </body>
</html>