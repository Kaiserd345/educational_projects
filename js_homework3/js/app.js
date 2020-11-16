'use strict'

// ## Задание
//
// Реализовать функцию, которая будет производить математические операции с введеными пользователем числами.
//
// #### Технические требования:
// - Считать с помощью модального окна браузера два числа.
// - Считать с помощью модального окна браузера математическую операцию, которую нужно совершить.
// Сюда может быть введено `+`, `-`, `*`, `/`.
// - Создать функцию, в которую передать два значения и операцию.
// - Вывести в консоль результат выполнения функции.
//
// #### Не обязательное задание продвинутой сложности:
//  - После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе
//  указал не числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных
//  должна быть введенная ранее информация).
const userSign = prompt('Please input operation "+", "-", "*" or "/"', '+');
let operand1 = '';
let operand2 = '';

while (operand1 === '' || isNaN(operand1)) {
    operand1 = prompt('Please input first operand', `${operand1}`);
}

while (operand2 === '' || isNaN(operand2)) {
    operand2 = prompt('Please input second operand', `${operand2}`);
}


function calcRequest (a, b, sign) {
    let result;
    a = +a;
    b = +b;
    switch (sign) {
        case '+':
            result = a + b;
            break
        case '-':
            result = a - b;
            break
        case '*':
            result = a * b;
            break
        case '/':
            result = a / b;
            break
        default:
            result = 'Something goes wrong';
    }
    return result
}

console.log(calcRequest(operand1, operand2, userSign));