var cart = {}; //корзина

$('document').ready(function(){
    tubGoodsload();
    barrelGoodsload();
    tankGoodsload();
    sidewallGoodsload();
    timberGoodsload();
    hoopGoodsload();
    rollerGoodsload();
    rollGoodsload();
    prongGoodsload();
    screwGoodsload();
    spigotGoodsload();
    nutGoodsload();
    doorGoodsload();
    diskGoodsload();
    harnessGoodsload();
    plugGoodsload();
    hookGoodsload();
    hoodGoodsload();
    ringGoodsload();
    ribandGoodsload();
    oil_lineGoodsload();
    propGoodsload();
    fingerGoodsload();
    adapterGoodsload();
    springGoodsload();
    latticeGoodsload();
    armGoodsload();
    pipeGoodsload();
    shimGoodsload();
    hoseGoodsload();
    checkCart();
    //showMiniCart();
});

function tubGoodsload(){ 
    $.getJSON('json/tubGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-tub-to-cart" style="color: black" data-art-tub="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#tubGoods').html(out);
        $('button.add-tub-to-cart').on('click', addtubToCart);
    })
}

function barrelGoodsload(){ 
    $.getJSON('json/barrelGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-barrel-to-cart" style="color: black" data-art-barrel="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#barrelGoods').html(out);
        $('button.add-barrel-to-cart').on('click', addbarrelToCart);
    })
}

function tankGoodsload(){ 
    $.getJSON('json/tankGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-tank-to-cart" style="color: black" data-art-tank="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#tankGoods').html(out);
        $('button.add-tank-to-cart').on('click', addtankToCart);
    })
}

function sidewallGoodsload(){ 
    $.getJSON('json/sidewallGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-sidewall-to-cart" style="color: black" data-art-sidewall="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#sidewallGoods').html(out);
        $('button.add-sidewall-to-cart').on('click', addsidewallToCart);
    })
}

function timberGoodsload(){ 
    $.getJSON('json/timberGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-timber-to-cart" style="color: black" data-art-timber="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#timberGoods').html(out);
        $('button.add-timber-to-cart').on('click', addtimberToCart);
    })
}

function hoopGoodsload(){ 
    $.getJSON('json/hoopGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-hoop-to-cart" style="color: black" data-art-hoop="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#hoopGoods').html(out);
        $('button.add-hoop-to-cart').on('click', addhoopToCart);
    })
}

function rollerGoodsload(){ 
    $.getJSON('json/rollerGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-roller-to-cart" style="color: black" data-art-roller="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#rollerGoods').html(out);
        $('button.add-roller-to-cart').on('click', addrollerToCart);
    })
}

function rollGoodsload(){ 
    $.getJSON('json/rollGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-roll-to-cart" style="color: black" data-art-roll="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#rollGoods').html(out);
        $('button.add-roll-to-cart').on('click', addrollToCart);
    })
}

function prongGoodsload(){ 
    $.getJSON('json/prongGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-prong-to-cart" style="color: black" data-art-prong="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#prongGoods').html(out);
        $('button.add-prong-to-cart').on('click', addprongToCart);
    })
}

function screwGoodsload(){ 
    $.getJSON('json/screwGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-screw-to-cart" style="color: black" data-art-screw="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#screwGoods').html(out);
        $('button.add-screw-to-cart').on('click', addscrewToCart);
    })
}

function spigotGoodsload(){ 
    $.getJSON('json/spigotGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-spigot-to-cart" style="color: black" data-art-spigot="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#spigotGoods').html(out);
        $('button.add-spigot-to-cart').on('click', addspigotToCart);
    })
}

function nutGoodsload(){ 
    $.getJSON('json/nutGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-nut-to-cart" style="color: black" data-art-nut="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#nutGoods').html(out);
        $('button.add-nut-to-cart').on('click', addnutToCart);
    })
}

function doorGoodsload(){ 
    $.getJSON('json/doorGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-door-to-cart" style="color: black" data-art-door="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#doorGoods').html(out);
        $('button.add-door-to-cart').on('click', adddoorToCart);
    })
}

function diskGoodsload(){ 
    $.getJSON('json/diskGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-disk-to-cart" style="color: black" data-art-disk="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#diskGoods').html(out);
        $('button.add-disk-to-cart').on('click', adddiskToCart);
    })
}

function harnessGoodsload(){ 
    $.getJSON('json/harnessGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-harness-to-cart" style="color: black" data-art-harness="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#harnessGoods').html(out);
        $('button.add-harness-to-cart').on('click', addharnessToCart);
    })
}

function plugGoodsload(){ 
    $.getJSON('json/plugGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-plug-to-cart" style="color: black" data-art-plug="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#plugGoods').html(out);
        $('button.add-plug-to-cart').on('click', addplugToCart);
    })
}

function hookGoodsload(){ 
    $.getJSON('json/hookGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-hook-to-cart" style="color: black" data-art-hook="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#hookGoods').html(out);
        $('button.add-hook-to-cart').on('click', addhookToCart);
    })
}

function hoodGoodsload(){ 
    $.getJSON('json/hoodGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-hood-to-cart" style="color: black" data-art-hood="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#hoodGoods').html(out);
        $('button.add-hood-to-cart').on('click', addhoodToCart);
    })
}

function ringGoodsload(){ 
    $.getJSON('json/ringGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-ring-to-cart" style="color: black" data-art-ring="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#ringGoods').html(out);
        $('button.add-ring-to-cart').on('click', addringToCart);
    })
}

function ribandGoodsload(){ 
    $.getJSON('json/ribandGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-riband-to-cart" style="color: black" data-art-riband="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#ribandGoods').html(out);
        $('button.add-riband-to-cart').on('click', addribandToCart);
    })
}

function oil_lineGoodsload(){ 
    $.getJSON('json/oil-lineGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-oil-line-to-cart" style="color: black" data-art-oil-line="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#oil-lineGoods').html(out);
        $('button.add-oil-line-to-cart').on('click', addoil_lineToCart);
    })
}

function propGoodsload(){ 
    $.getJSON('json/propGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-prop-to-cart" style="color: black" data-art-prop="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#propGoods').html(out);
        $('button.add-prop-to-cart').on('click', addpropToCart);
    })
}

function fingerGoodsload(){ 
    $.getJSON('json/fingerGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-finger-to-cart" style="color: black" data-art-finger="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#fingerGoods').html(out);
        $('button.add-finger-to-cart').on('click', addfingerToCart);
    })
}

function adapterGoodsload(){ 
    $.getJSON('json/adapterGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-adapter-to-cart" style="color: black" data-art-adapter="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#adapterGoods').html(out);
        $('button.add-adapter-to-cart').on('click', addadapterToCart);
    })
}

function springGoodsload(){ 
    $.getJSON('json/springGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-spring-to-cart" style="color: black" data-art-spring="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#springGoods').html(out);
        $('button.add-spring-to-cart').on('click', addspringToCart);
    })
}

function latticeGoodsload(){ 
    $.getJSON('json/latticeGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-lattice-to-cart" style="color: black" data-art-lattice="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#latticeGoods').html(out);
        $('button.add-lattice-to-cart').on('click', addlatticeToCart);
    })
}

function armGoodsload(){ 
    $.getJSON('json/armGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-arm-to-cart" style="color: black" data-art-arm="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#armGoods').html(out);
        $('button.add-arm-to-cart').on('click', addarmToCart);
    })
}

function pipeGoodsload(){ 
    $.getJSON('json/pipeGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-pipe-to-cart" style="color: black" data-art-pipe="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#pipeGoods').html(out);
        $('button.add-pipe-to-cart').on('click', addpipeToCart);
    })
}

function shimGoodsload(){ 
    $.getJSON('json/shimGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-shim-to-cart" style="color: black" data-art-shim="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#shimGoods').html(out);
        $('button.add-shim-to-cart').on('click', addshimToCart);
    })
}

function hoseGoodsload(){ 
    $.getJSON('json/hoseGoods.json', function (data){
        var out = '';
        for (var key in data){
            out+='<div class="single-goods"><button class="add-hose-to-cart" style="color: black" data-art-hose="'+key+'">';
            out+='<h4>'+data[key]['name']+'</h4>';
            out+='<h4>'+data[key]['vendor_code']+'</h4>';
            out+='<img src="'+data[key].image+'">';
            out+='<p>Цена: '+data[key]['cost']+'$</p>';
            out+='</button></div>';
        }
        $('#hoseGoods').html(out);
        $('button.add-hose-to-cart').on('click', addhoseToCart);
    })
}

function addtubToCart(){ 
    var articul = $(this).attr('data-art-tub');
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

function addbarrelToCart(){ 
    var articul = $(this).attr('data-art-barrel');
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

function addtankToCart(){ 
    var articul = $(this).attr('data-art-tank');
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

function addsidewallToCart(){ 
    var articul = $(this).attr('data-art-sidewall');
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

function addtimberToCart(){ 
    var articul = $(this).attr('data-art-timber');
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

function addhoopToCart(){ 
    var articul = $(this).attr('data-art-hoop');
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

function addrollerToCart(){ 
    var articul = $(this).attr('data-art-roller');
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

function addrollToCart(){ 
    var articul = $(this).attr('data-art-roll');
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

function addprongToCart(){ 
    var articul = $(this).attr('data-art-prong');
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

function addscrewToCart(){ 
    var articul = $(this).attr('data-art-screw');
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

function addspigotToCart(){ 
    var articul = $(this).attr('data-art-spigot');
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

function addnutToCart(){ 
    var articul = $(this).attr('data-art-nut');
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

function adddoorToCart(){ 
    var articul = $(this).attr('data-art-door');
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

function adddiskToCart(){ 
    var articul = $(this).attr('data-art-disk');
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

function addharnessToCart(){ 
    var articul = $(this).attr('data-art-harness');
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

function addplugToCart(){ 
    var articul = $(this).attr('data-art-plug');
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

function addhookToCart(){ 
    var articul = $(this).attr('data-art-hook');
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

function addhoodToCart(){ 
    var articul = $(this).attr('data-art-hood');
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

function addringToCart(){ 
    var articul = $(this).attr('data-art-ring');
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

function addribandToCart(){ 
    var articul = $(this).attr('data-art-riband');
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

function addoil_lineToCart(){ 
    var articul = $(this).attr('data-art-oil-line');
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

function addpropToCart(){ 
    var articul = $(this).attr('data-art-prop');
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

function addfingerToCart(){ 
    var articul = $(this).attr('data-art-finger');
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

function addadapterToCart(){ 
    var articul = $(this).attr('data-art-adapter');
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

function addspringToCart(){ 
    var articul = $(this).attr('data-art-spring');
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

function addlatticeToCart(){ 
    var articul = $(this).attr('data-art-lattice');
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

function addarmToCart(){ 
    var articul = $(this).attr('data-art-arm');
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

function addpipeToCart(){ 
    var articul = $(this).attr('data-art-pipe');
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

function addshimToCart(){ 
    var articul = $(this).attr('data-art-shim');
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

function addhoseToCart(){ 
    var articul = $(this).attr('data-art-hose');
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