//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
{
    (()=> {
        const arr = []
        for (let i = 20; i <= 30; i+=0.5) {
            arr.push(i)
        }
        console.log(arr.join(' '))
    })()
}

//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
{
    (()=> {
        const arr = []
        for (let i = 10; i <= 100; i+=10) {
            arr.push(`${i}$ = ${i*27} гривень`)
        }
        console.log(arr.join('\n'))
    })()
}

//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

{
    ((n)=> {
        const arr = []
        for (let i = 1; i <= 100; i++) {
            if(Math.pow(i, 2) <= n){
                arr.push(i)
            } else {
                break
            }
        }
        n > 0 ? console.log(arr.join(' ')) : console.log('Число слишком мало')
    })(16)
}

//4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
//Метод: Перебор делителей
{
    ((n)=> {
        let isPime = true
        const maxСounter = Math.floor(Math.sqrt(n))
        for (let i = 2; i <= maxСounter; i++) {
            if(n%i===0){
                isPime = false
                break
            }
        }
        const result = (n < 2 || !isPime) ? `${n} is not prime number` : `${n} is prime number`
        console.log(result)
    })(97)
}


//5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function isDerivative3(n, degree = 0) {
    if(n === 1){
        return `Число являеться производным от числа 3 в степени ${degree}`
    } else if(!Number.isInteger(n)){
        return `Число не являеться производным от числа 3`
    } return isDerivative3(n/3, degree+=1)
}
console.log(isDerivative3(27))




// function isDerivative(n, x, degree = 0){
//     if(n === 1){
//         return `Число являеться производным от числа ${x} в степени ${degree}`
//     } else if(!Number.isInteger(n)){
//         return `Число ${n} не являеться производным от числа ${x}`
//     } return isDerivative(n / x, x, degree += 1) 
// }
// console.log(isDerivative(9, 3))