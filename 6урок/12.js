const $container = document.querySelector('#cart');
const price = { мороженое: 5, хлеб: 10, колбаса: 10, мясо: 8, курица: 7, рыба: 12 }; // прайс
const shopping_cart = {}; // здесь лежат выбранные товары 

var basket = {
    sum: 0, // свойство, чтоб было к чему обращаться
    countBasketPrice: function () {
        let sum = 0;
        for (let key in shopping_cart) {
            if (key in price) {
                sum += price[key] * shopping_cart[key]
            }
        }
        this.sum = sum;//передаем свойство
        return (sum);//возвращаем занчение функции
    }
};

//динамическая корзина
function draw_basket(arr) {
    var nam = 0;

    var total_products = document.createElement('p');

    for (i in shopping_cart) {
        nam++;
    }
    if (nam == 0) {
        total_products.textContent = 'Карзина пуста';
    }
    else {
        total_products.textContent = 'В корзине ' + nam + ' товаров на сумму =  ' + basket.sum + ' рублей';
    }
    $container.appendChild(total_products);
}
//обработчик событий
function eventHandler() {
    document.onclick = event => {
        if (event.target.classList.contains('plus')) {
            plusCart(event.target.dataset.id)
        }
        if (event.target.classList.contains('minus')) {
            minusCart(event.target.dataset.id)
        }
    }
}
// увеличение количества товаров
function plusCart(id) {
    if (id in shopping_cart) {
        shopping_cart[id]++;
    }
    else {
        shopping_cart[id] = 1;
    }
    basket.countBasketPrice();
    draw_basket();

}

//уменьшения товаров
function minusCart(id) {
    if (shopping_cart[id] - 1 === 0) {
        delete shopping_cart[id];
    }
    else {
        shopping_cart[id]--;
    }
    basket.countBasketPrice();
    draw_basket();
}

