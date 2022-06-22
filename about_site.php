<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <title>О нас</title>
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
            <h2>Наши преимущества</h2>
            <ul class="element" type="square">
                <li style="display: block;"> • Быстрый и простой поиск товаров;</li>
                <li style="display: block;"> • Возможность быстро выбрать товар и совершить покупку;</li>
                <li style="display: block;"> • Регулярное обновление товаров и добавление новых;</li>
                <li style="display: block;"> • Простой и понятный интерфейс, со всем необходимым функционалом.</li>
            </ul>
            <h2>Ассортимент</h2>
            <a>Наш ассортимент насчитывает 136 артикулов запчастей к тракторам и другой сельхозтехнике. Нужный товар легко можно найти в каталоге, либо воспользоваться поиском по сайту.</a><br>
            <h2>Почему мы?</h2>
            <a>Главная ценность бизнеса - это клиент. Для нас это не просто слова. Эффективная работа для клиента – наш приоритет. Мы глубоко убеждены, что наша работа создает ценность для наших клиентов. Мы не «впариваем» и не обманываем. Мы честно говорим о наших возможностях, преимуществах и недостатках.</a><br>
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