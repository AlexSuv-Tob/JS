//	Не выполняя код, ответить, что выведет браузер и почему:

//1 

if (!("a" in window)) {
    var a = 1;
}
alert(a);

// ответ:  браузер выведет undefined, так как "if" должен возвращать false
// поскольку "a" в окне должно быть false, а false должно быть истинным, 
// поэтому переменная "a" никогда не получает значение.

//2
var b = function a(x) {
    x && a(--x);
};
alert(a);

// Ответ: браузер выведет пустую страницу, тк. функция а по сути является анонимной и не определена


//3
function a(x) {
    return x * 2;
}
var a;
alert(a);

// Ответ: сначало мы объявляем переменную "а" как undefined, после этого объявляем функцию под тем же именем, 
// объявление функции имеет приоритет над объявлениями переменных
// Функции в данном случае является типом значения.
// Значения могут храниться в переменных (и свойствах и передаваться как аргументы для функций и т.д.).
// т.к присвоение значения в переменной "а" не происходит, то значением "а" является функция, что и выводит alert:
//function a(x) {
//     return x * 2;
// }

// //4
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
//ответ: похоже, что получается arguments  это и есть "а", поэтому выводитс язначение "а", а не переданых аргументов

// //5
function a() {
    alert(this);
}
a.call(null);
// Ответ: this в глобальной области указывает на window. Вызов call() у функции с параметром null
// равнозначно вызову call() без аргументов. А без аргументов вызываемая функция не привязывается 
// ни к какому объекту (или привязывается к «объекту по умолчанию» — window). Что и получилось в итоге:
//[object Window]