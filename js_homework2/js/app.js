'use strict'

// ## Задание
//
// Реализовать программу на Javascript, которая будет находить все числа кратные 5
// (делятся на 5 без остатка) в заданном диапазоне.
//
//     #### Технические требования:
// - Считать с помощью модального окна браузера число, которое введет пользователь.
// - Вывести в консоли все числа кратные 5, от 0 до введенного пользователем числа.
// Если таких чисел нету - вывести в консоль фразу `Sorry, no numbers'
// - Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.
//
// #### Не обязательное задание продвинутой сложности:
// - Проверить, что введенное значение является целым числом. Если данное условие
// не соблюдается, повторять вывод окна на экран до тех пор, пока не будет введено целое число.
// - Считать два числа, `m` и `n`. Вывести в консоль все простые числа
// (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE)
// в диапазоне от `m` до `n` (меньшее из введенных чисел будет `m`, бОльшее будет `n`).
// Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение
// об ошибке, и спросить оба числа заново.

let userNumber = prompt('Input number please:', '');

function checkDividing () {
    const resultArr = [];

    //Check dividing
    for (let i = 1; i <= +userNumber; i++) {
        if (i % 5 === 0) {
            resultArr.push(i);
        }
    }

    //Check and log array of results
    if (resultArr.length !== 0) {
        let resultString = `This number can be divide on ${userNumber}:`;
        for (let i = 0; i < resultArr.length; i++) {
            resultString += ` ${resultArr[i]}`;
        }
        console.log(resultString);
    } else {
        console.log(`Sorry, no numbers`);
    }
}

//Check input number
while (userNumber === '' || isNaN(userNumber)) {
    alert("It's not a number");
    userNumber = prompt('Input number please:', '');
}

checkDividing();
