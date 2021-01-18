// 1.	Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
//Доска должна быть верно разлинована на черные и белые ячейки. 
//Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

var letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];// массив для заполнения полей с буквами
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];// массив для заполнения полей с цифрами
// открываем таблицу для букв сверху
document.write('<table style = "border-style : solid">');
for (var a = 1; a <= 9; a++) {
    document.write('<td style = "width : 70px; height : 70px; background-color : #B0E0E6">' + letters[a - 1] + '</td>');
}
// открываем таблицу для поля
document.write('<table style = "border-style : solid">');
for (var k = 1; k <= 8; k++) {
    document.write('<tr>');

    if (k % 2 == 0) {
        for (var i = 1; i <= 9; i++) {
            if (i === 1) {
                document.write('<td style = "width : 70px; height : 70px; background-color : #B0E0E6">'
                    + numbers[k - 1] + '</td>');
            }
            else if (i % 2 == 0) {
                document.write('<td style = "width : 70px; height : 70px; background-color : white"></td>');
            }
            else {
                document.write('<td style = "width : 70px; height : 70px; background-color : black"></td>');
            };
        };
    }
    else {
        for (var i = 1; i <= 9; i++) {
            if (i === 1) {
                document.write('<td style = "width : 70px; height : 70px; background-color : #B0E0E6">'
                    + numbers[k - 1] + '</td>');
            }

            else if (i % 2 == 0) {
                document.write('<td style = "width : 70px; height : 70px; background-color : black"></td>');
            }
            else {
                document.write('<td style = "width : 70px; height : 70px; background-color : white"></td>');
            };
        };
    }
    document.write('</tr>');
};
document.write('</table>');
document.write('</table>');
