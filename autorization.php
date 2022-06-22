<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Форма авторизации</title>
        <link rel="stylesheet" type="text/css" href="css/style_autorization.css"/>
    </head>
    <body>
        <form action="check_autorization.php" method="post">
            <h1 title="Форма авторизации на сайте">Авторизация</h1>
			 <div class="group">
                <label for="">Логин</label>
                <input type="text" name="login" id="login">
            </div>
            <div class="group">
                <label for="">Пароль</label>
                <input type="password" name="pass" id="pass">
            </div>
            <div class="group">
                <center><button>Войти</button></center>
            </div>
        </form>
        <div class="group" style="margin-top: -75px; padding: 0px">		
                <center><a href="registration.php"><button>Новый аккаунт</button></a></center>
            </div>
    </body>
</html>