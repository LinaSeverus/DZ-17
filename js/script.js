'use strict';

function mainFunction(callback) {

    const num1 = +prompt(`Введите первое число`);
    const num2 = +prompt(`Введите второе число`);

    if ((isNaN(num1) || num1 === 0) || (isNaN(num2) || num2 === 0)) alert(`ERROR`);

    callback(num1, num2);
}

function exponentiation(a, b) {

    const result = a ** b;
    return alert(`Результат:  ${result}`);
}

let multiplay = (a, b) => alert(`${a * b}`);
let division = (a, b) => alert(`${a / b}`);
let modulo = (a, b) => alert(`${a % b}`);


mainFunction(exponentiation);

mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);