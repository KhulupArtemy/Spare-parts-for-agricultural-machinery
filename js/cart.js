var cart={};

$.getJSON('json/goods.json', function(data){
    var goods = data; //массив товаров
    checkCart();
    //console.log(cart);
    showCart();
    showGoods();

    function showCart(){ //вывод товаров на страницу
        if ($.isEmptyObject(cart)){ //если корзина пуста
            var out = '<b style="font-size: 24px; padding-left: 20px;">Корзина пуста. Добавьте товар в корзину, <a href="catalog.php">каталог</a>.</b>';
            showGoods();
            $('#my-cart').html(out);
        }
        else{
            var out='';
            summ = 0;
            out += '<b style="font-size: 24px; padding-left: 20px;">Вернуться в <a href="catalog.php">каталог</a>.</b><br><br>';
            for (var key in cart){
                out += '<center>';
                out += '<div style="height: 10px; width: 100%; background: #e2eed7; margin: 0px; margin-bottom: 50px;"></div>'
                out += '<button class="delete" style="color: black" data-art="'+key+'"><b>x</b></button>';
                out += goods[key].name+' ';
                out += goods[key].vendor_code;
                out +='<br>';
                out += '<img src="'+goods[key].image+'"><a> </a>';
                out +='<br>';
                out += '<a style="margin-left: 20px">Количество</a>';
                out += '<button class="minus" style="color: black" data-art="'+key+'"><b>-</b></button><a></a>';
                out += cart[key];
                out += '<button class="plus" style="color: black" data-art="'+key+'"><b>+</b></button><a>Цена: </a>';
                out += (cart[key]*goods[key].cost).toFixed(2)+'<a>$</a>';
                out += '</center>';
                out += '<br><br><br>'
                summ = summ + Number((cart[key]*goods[key].cost).toFixed(2));
            }
            out += '<div style="height: 10px; width: 100%; background: #e2eed7; margin: 0px;"></div>'
            out += '<br><a style="margin-left: 20px; font-size: 24px;">Сумма заказа: '+Number(summ.toFixed(2))+'$</a>';
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }

    function showGoods(){ //вывод товаров в input
        var out='';
        summ = 0;
        out += '<input type="hidden" name="goods" id="goods" value="';
        for (var key in cart){
            summ = summ + Number((cart[key]*goods[key].cost).toFixed(2));
            out += 'Товар - '+goods[key].vendor_code+', количество - '+cart[key]+', цена - '+(cart[key]*goods[key].cost).toFixed(2)+'$. ';
        }
        out += 'Сумма заказа: '+Number(summ.toFixed(2))+'$.';
        out += '" readonly>';
        $('#goods_load').html(out);
        
    }

    function plusGoods(){
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
        showGoods();
    }

    function minusGoods(){
        var articul = $(this).attr('data-art');
        if (cart[articul]>1){
            cart[articul]--;
        } 
        else{
            delete cart[articul];
        } 
        saveCartToLS();
        showCart();
        showGoods();
    }

    function deleteGoods(){
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();
        showCart();
        showGoods();
    }
});

function checkCart(){ //проверка налачие корзины в localstorage
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS(){ //сохранить в LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}