//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
//Обязательно использовать оператор return

var a = +prompt('Введите первое число: ');
var b = +prompt('Введите второе число: ');

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a + b;
}

plus(a, b);
minus(a, b);
division(a, b);
multiplication(a, b);