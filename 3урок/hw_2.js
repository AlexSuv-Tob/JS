// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
const price = { мороженое: 5, колбаса: 10, мясо: 8, курица: 7, рыба: 12, хлеб: 2 }; // прайс
let shopping_cart = { мороженое: 3, хлеб: 1 }; // корзина

var res = [];// массив для накопления стоимости отдельных товаров

//функция подсчета количественной стоимости по позициям
function countBasketPrice(shopping_cart) {
    for (let key in shopping_cart) {
        if (key in price) {
            var s = price[key] * shopping_cart[key]
        }
        res.push(s);
    }
    var sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return (sum);
}

alert(countBasketPrice(shopping_cart));