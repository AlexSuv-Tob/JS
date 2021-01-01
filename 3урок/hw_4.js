// Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

const pyramidScheme = (rows, symbol) => {
    let picture = '';
    for (let i = 1; i <= rows; i++) {
        console.log(picture += symbol);
    }
};

pyramidScheme(20, 'x');