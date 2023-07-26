

//1. Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const mixedArr = ['a', 1, false, [], '2', 12, {}, 3, -1, 22]
function getMeanOfNumbers(arr) {
    const sumOfNums = arr.reduce((acc, cur) => typeof cur === 'number' ? acc += cur : acc, 0)
    const countOfNums = arr.reduce((acc, cur) => typeof cur === 'number' ? acc = [...acc, cur] : acc, []).length
    const mathMean = sumOfNums / countOfNums
    return mathMean
}
console.log(getMeanOfNumbers(mixedArr))

//2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const mathBtn = document.querySelector('#math')
function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return `${x} + ${y} = ${x + y}`
        case '-':
            return `${x} - ${y} = ${x - y}`
        case '*':
            return `${x} * ${y} = ${x * y}`
        case '/':
            return y !== 0 ? `${x} / ${y} = ${x / y}` : 'На ноль делить нельзя'
        case '%':
            return y !== 0 ? `${x} % ${y} = ${x % y}` : 'На ноль делить нельзя'
        case '^':
            return `${x} ^ ${y} = ${Math.pow(x, y)}`
        default:
            return 'Вы выбрали не существующую операцию'
    }
}
mathBtn.addEventListener('click', () => {
    const x = prompt("Enter X value it should be number")
    const y = prompt("Enter Y value it should be number")
    const operation = prompt('Enter math operation it should be +, -, *, /, %, ^')
    if (x && !isNaN(x) && y && !isNaN(y) && new RegExp(/[\+\-*\/%\^]/).test(operation)) {
        console.log(doMath(Number(x), operation, Number(y)))
    } else {
        console.log('Вы ввели некоректные значения')
    }
})
console.log(doMath(3, '%', 2))

//3. Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
const fillBtn = document.querySelector('#fill')

function fillMatrix(coll, row) {
    const arr = []
    for (let i = 0; i < coll; i++) {
        arr.push([])
        for (let j = 0; j < row; j++) {
            arr[i][j] = prompt(`Введите элемент массива`)
        }
    }
    return arr
}

fillBtn.addEventListener('click', () => {
    const coll = prompt('Введите длину длину основного массива (не больше 3)')
    const row = prompt('Введите длину длину для вложеных массивов (не больше 3)')
    if (coll && row && !isNaN(coll) && !isNaN(row) && Number(coll) <= 3 && Number(row) <= 3) {
        console.log(fillMatrix(Number(coll), Number(row)))
    } else {
        console.log('Вы ввели некоректные значения')
    }
})

//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function removeLetters(string, letters){
    if(letters.length === 0){
        return string
    }
    return removeLetters(string.replace(new RegExp(letters.shift(), 'g'), ''), letters)
}

console.log(removeLetters("hello world", ['l', 'd']))