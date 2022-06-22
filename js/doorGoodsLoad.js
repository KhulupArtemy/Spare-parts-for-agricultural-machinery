var cart = {}; //корзина

$('document').ready(function(){
    loadGoods();
    checkCart();
    //showMiniCart();
});

function loadGoods(){ //загрузка товаров в каталоге
    $.getJSON('json/doorGoods.json', function (data){
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-to-cart" data-art="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#doorGoods').html(out);
        $('button.add-to-cart').on('click', addNewToCart);
    })
}

function addNewToCart(){ //добавляем товар в корзину
    var articul = $(this).attr('data-art');
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