//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций 
//(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

var arg1 = +prompt('Введите первое число: ');
var arg2 = +prompt('Введите второе число: ');
var operation = prompt('введите математическое действие в виде знака(сложение, вычитание, умножение, деление): ');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return hw_5.plus(arg1, arg2);
            break;
        case 'вычитание':
            return hw_5.minus(arg1, arg2);
            break;
        case 'деление':
            return hw_5.division(arg1, arg2);
            break;
        case 'умножение':
            return hw_5.multiplication(arg1, arg2);
            break;
    }
}

mathOperation(arg1, arg2, operation);