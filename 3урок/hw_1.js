// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function Prime_numbers(num) {
    let arr = [];
    var i = 2;
    while (i <= 100) {
        nextPrime:
        for (var i = 2; i <= num; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            arr.push(i); // простое число
        }
    }
    return arr;
}

alert(Prime_numbers(100));