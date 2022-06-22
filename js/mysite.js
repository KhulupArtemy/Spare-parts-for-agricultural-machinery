var cart = {}; //корзина

$('document').ready(function(){
    loadNewGoods();
    loadDiscountGoods();
    checkCart();
    //showMiniCart();
});

function loadNewGoods(){ //загрузка новых товаров на главную страницу
    $.getJSON('json/newGoods.json', function (data){
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-new-to-cart" style="color: black" data-art-new="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#newGoods').html(out);
        $('button.add-new-to-cart').on('click', addNewToCart);
    })
}

function loadDiscountGoods(){ //загрузка товаров по акции на главную страницу
    $.getJSON('json/discountGoods.json', function (data){
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-discount-to-cart" style="color: black" data-art-discount="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: <s>'+data[key]['old_price']+'$</s> <a style="color: red"><b>'+data[key]['cost']+'</b><a>$</p>';
            out+='</button></div>';
        }
        $('#discountGoods').html(out);
        $('button.add-discount-to-cart').on('click', addDiscountToCart);
    })
}

function addNewToCart(){ //добавляем новый товар в корзину
    var articul = $(this).attr('data-art-new');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    //showMiniCart();
}

function addDiscountToCart(){ //добавляем товар по акции в корзину
    var articul = $(this).attr('data-art-discount');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    //showMiniCart();
}

function checkCart(){ //проверка налачие корзины в localstorage
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart(){ //показ содержимого корзины
    var out = '';
    for (var w in cart){
        out += w + ' --- ' +cart[w]+'<br>';
    }
    $('#mini-cart').html(out);
}