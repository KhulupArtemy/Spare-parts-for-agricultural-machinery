<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Форма регистрации</title>
        <link rel="stylesheet" type="text/css" href="css/style_registration.css"/>
    </head>
    <body>
        <form action="check_registration.php" method="post">
            <h1 title="Форма регистрации на сайте">Регистрация</h1>
            <div class="group">
                <label for="">Имя пользователя</label>
                <input type="text" name="name" id="name">
            </div>
			 <div class="group">
                <label for="">Логин</label>
                <input type="text" name="login" id="login">
            </div>
            <div class="group">
                <label for="">Пароль</label>
                <input type="password" name="pass" id="pass">
            </div>
            <div class="group">
                <center><button>Регистрация</button></center>
            </div>
        </form>
            <div class="group" style="margin-top: -85px; padding: 0px">		
                <center><a href="autorization.php"><button>Есть аккаунт</button></a></center>
            </div>
    </body>
</html>