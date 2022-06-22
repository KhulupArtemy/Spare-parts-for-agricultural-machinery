<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
        <title>Каталог товаров</title>
        <link rel="stylesheet" href="css/style_catalog.css">
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
			<div class="single-goods">
                <a href="tubGoods.php"><button>
                    <h4>Баки</h4>
                    <img src='images/tub.png'>
                </button></a>
                <a href="barrelGoods.php"><button>
                    <h4>Барабаны</h4>
                    <img src='images/barrel.png'>
                </button></a>
                <a href="tankGoods.php"><button>
                    <h4>Бачки</h4>
                    <img src='images/tank.png'>
                </button></a>
                <a href="sidewallGoods.php"><button>
                    <h4>Боковины</h4>
                    <img src='images/sidewall.png'>
                </button></a>
                <a href="timberGoods.php"><button>
                    <h4>Брусья</h4>
                    <img src='images/timber.png'>
                </button></a>
                <a href="hoopGoods.php"><button>
                    <h4>Бугеля</h4>
                    <img src='images/hoop.png'>
                </button></a>
                <a href="rollerGoods.php"><button>
                    <h4>Валы</h4>
                    <img src='images/roller.png'>
                </button></a>
                <a href="rollGoods.php"><button>
                    <h4>Валики</h4>
                    <img src='images/roll.png'>
                </button></a>
                <a href="prongGoods.php"><button>
                    <h4>Вилки</h4>
                    <img src='images/prong.png'>
                </button></a>
                <a href="screwGoods.php"><button>
                    <h4>Винты</h4>
                    <img src='images/screw.png'>
                </button></a>
                <a href="spigotGoods.php"><button>
                    <h4>Втулки</h4>
                    <img src='images/spigot.png'>
                </button></a>
                <a href="nutGoods.php"><button>
                    <h4>Гайки</h4>
                    <img src='images/nut.png'>
                </button></a>
                <a href="doorGoods.php"><button>
                    <h4>Двери</h4>
                    <img src='images/door.png'>
                </button></a>
                <a href="diskGoods.php"><button>
                    <h4>Диски</h4>
                    <img src='images/disk.png'>
                </button></a>
                <a href="harnessGoods.php"><button>
                    <h4>Жгуты</h4>
                    <img src='images/harness.png'>
                </button></a>
                <a href="plugGoods.php"><button>
                    <h4>Заглушки</h4>
                    <img src='images/plug.png'>
                </button></a>
                <a href="hookGoods.php"><button>
                    <h4>Зацепы</h4>
                    <img src='images/hook.png'>
                </button></a>
                <a href="hoodGoods.php"><button>
                    <h4>Капоты</h4>
                    <img src='images/hood.png'>
                </button></a>
                <a href="ringGoods.php"><button>
                    <h4>Кольца</h4>
                    <img src='images/ring.png'>
                </button></a>
                <a href="ribandGoods.php"><button>
                    <h4>Ленты</h4>
                    <img src='images/riband.png'>
                </button></a>
                <a href="oil-lineGoods.php"><button>
                    <h4>Маслопроводы</h4>
                    <img src='images/oil-line.png'>
                </button></a>
                <a href="propGoods.php"><button>
                    <h4>Опоры</h4>
                    <img src='images/prop.png'>
                </button></a>
                <a href="fingerGoods.php"><button>
                    <h4>Пальцы</h4>
                    <img src='images/finger.png'>
                </button></a>
                <a href="adapterGoods.php"><button>
                    <h4>Переходники</h4>
                    <img src='images/adapter.png'>
                </button></a>
                <a href="springGoods.php"><button>
                    <h4>Пружины</h4>
                    <img src='images/spring.png'>
                </button></a>
                <a href="latticeGoods.php"><button>
                    <h4>Решетки</h4>
                    <img src='images/lattice.png'>
                </button></a>
                <a href="armGoods.php"><button>
                    <h4>Рычаги</h4>
                    <img src='images/arm.png'>
                </button></a>
                <a href="pipeGoods.php"><button>
                    <h4>Трубы</h4>
                    <img src='images/pipe.png'>
                </button></a>
                <a href="shimGoods.php"><button>
                    <h4>Шайбы</h4>
                    <img src='images/shim.png'>
                </button></a>
                <a href="hoseGoods.php"><button>
                    <h4>Шланги</h4>
                    <img src='images/hose.png'>
                </button></a>
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