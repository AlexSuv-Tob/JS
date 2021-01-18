// 2.	Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//     a.	Пустая корзина должна выводить строку «Корзина пуста»;
//     b.	Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

// передаем контейнер в блок main в html
const $container = document.querySelector('#cart');
const price = { мороженое: 5, колбаса: 10, мясо: 8, курица: 7, рыба: 12, хлеб: 2 }; // прайс
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
// товары и их количество
shopping_cart.мороженое = 2;
shopping_cart.колбаса = 5;

basket.countBasketPrice();

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

draw_basket();