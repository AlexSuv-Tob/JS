const $container = document.querySelector('#cart');
const price = { мороженое: 5, хлеб: 10, колбаса: 10, мясо: 8, курица: 7, рыба: 12 }; // прайс
const shopping_cart = {}; // здесь лежат выбранные товары 

const popupElement = document.querySelector('#popup');// div с выводом корзины
const $wrapper = popupElement.querySelector('#wrapper');
const deliveryElement = document.querySelector('#delivery');//div с вводом адреса
const commentsElement = document.querySelector('#comments');// div с выводом комментария

const comment = document.querySelector('#comment').value;// значнеи поля ввода комментария
const delivery_address = document.querySelector('#delivery_address').value;//значнеи поля ввода адреса доставки

const photoElement = document.querySelector('#photo');
const investmentElement = document.querySelector('#investment');

const left = popupElement.querySelector('#btnleft')
const right = popupElement.querySelector('#btnright')

const goods = [
    { name: 'мороженое', images: ['морож_1.jpg', 'морож_2.jpg', 'морож_3.jpg'] },
    { name: 'хлеб', images: ['хлеб_1.jpg', 'хлеб_2.jpg', 'хлеб_3.jpg'] },
    { name: 'колбаса', images: ['колбаса_1.jpg', 'колбаса_2.jpg', 'колбаса_3.jpg'] },
    { name: 'мясо', images: ['мясо_1.jpg', 'мясо_2.jpg', 'мясо_3.jpg'] },
    { name: 'курица', images: ['курица_1.jpg', 'курица_2.jpg', 'курица_3.jpg'] },
    { name: 'рыба', images: ['рыба_1.jpg', 'рыба_2.jpg', 'рыба_3.jpg'] }
]

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
    $container.textContent = '';//очищаем надпись корзины
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
// вывод содрежания карзины
document.querySelector('#cart')
    .addEventListener('click', openPopup);
function openPopup() {
    popupElement.style.display = 'block';
    var type_basket = document.createElement('p');
    var str = "";
    for (k in shopping_cart) {
        str += k + ' - ' + shopping_cart[k];
    }
    type_basket.textContent = str + ' сумма заказа = ' + basket.sum +
        ' рублей';
    $wrapper.appendChild(type_basket);
}
// вывод поля для ввода адреса
document.querySelector('#further')
    .addEventListener('click', openAd);
function openAd() {
    popupElement.style.display = 'none';
    deliveryElement.style.display = 'block';
}
// вывод поля для ввода комментария
document.querySelector('#send')
    .addEventListener('click', openCom);
function openCom() {
    deliveryElement.style.display = 'none';
    commentsElement.style.display = 'block';

}
//функция закрытия окна при отправке комментария
document.querySelector('#send_com')
    .addEventListener('click', closeWindow);
function closeWindow() {
    commentsElement.style.display = 'none';
}

// вывод фото в отдельное окно
var images = [];
var currentImg = 0;

document.querySelector('#products').addEventListener('click', function (event) {
    console.log(event);
});


function openPhoto(e) {
    images = goods[Number(this.dataset.idx)]['images'];
    currentImg = e.target.getAttribute('data-ide');
    console.log(Number(this.dataset.idx));

    drawPhotoContent(Number(this.dataset.idx));

    photoElement.style.display = 'block';
}
function drawPhotoContent() {
    investment.textContent = '';
    const img = document.createElement('img');
    img.setAttribute('src', `img/${images[currentImg]}`);

    investment.appendChild(img);
}
// перемотка влево
document.querySelector('#btnleft')
    .addEventListener('click', openLeft)

function openLeft() {
    currentImg = (currentImg + 1 >= images.length) ? 0 : currentImg + 1;
    drawPhotoContent()
}
// перемотка вправо
document.querySelector('#btnright')
    .addEventListener('click', openRight)

function openRight() {
    currentImg = (currentImg - 1 < 0) ? images.length - 1 : currentImg - 1;
    drawPhotoContent()
}
// закрытие окна с фото
document.querySelector('#closed')
    .addEventListener('click', closedPhoto)
function closedPhoto() {
    photoElement.style.display = 'none';
}
