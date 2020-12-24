// С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень

var val = +prompt('Введите число: ');
var pow = +prompt('Введите степень возведения: ');

function double_power(val, pow) {
    return pow > 0 ? val * double_power(val, pow - 1) : 1;
}

double_power(val, pow);