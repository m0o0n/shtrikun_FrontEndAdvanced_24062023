// 1. Дан масив 
// [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// Знайти суму та кількість позитивних елементів.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

{
    (() => {
        const sum = arr.reduce((acc, cur) => {
            if (cur > 0) {
                acc += cur
            }
            return acc
        }, 0)

        const count = arr.reduce((acc, cur) => {
            if (cur > 0) {
                acc = [...acc, cur]
            }
            return acc
        }, []).length
        console.log(`В массиве ${count} положительных элементов их сумма равна ${sum}`)
    })()
}


//2. Знайти мінімальний елемент масиву та його порядковий номер.
console.log(`Минимальный элемент в массиве равняеться ${Math.min(...arr)} он находиться по индексу ${arr.indexOf(Math.min(...arr))}`)

// 3. Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Максимальный элемент в массиве равняеться ${Math.max(...arr)} он находиться по индексу ${arr.indexOf(Math.max(...arr))}`)


{
    (() => {
        
        const negtiveCount = arr.reduce((acc, cur) => {
            if (cur < 0) {
                acc = [...acc, cur]
            }
            return acc
        }, []).length

        const positiveMult = arr.reduce((acc, cur) => {
            if (cur > 0) {
                acc *= cur
            }
            return acc
        }, 1)

        const odd = arr.reduce((acc, cur) => {
            if (cur > 0 && cur%2 !== 0) {
                acc = [...acc, cur]
            }
            return acc
        }, [])
        
        const even = arr.reduce((acc, cur) => {
            if (cur > 0 && cur%2 === 0) {
                acc = [...acc, cur]
            }
            return acc
        }, [])
        //4. Визначити кількість негативних елементів.
        console.log(`В массиве ${negtiveCount} отрицательных элементов`)


        //5. Знайти кількість непарних позитивних елементів.
        console.log(`В массиве ${odd.length} положительных не парных элементов`)

        //6. Знайти кількість парних позитивних елементів.
        console.log(`В массиве ${even.length} положительных парных элементов`)

        //7. Знайти суму парних позитивних елементів.
        console.log(`Cумма положительных парных элементов равна ${even.reduce((acc,cur)=>acc+=cur)}`)

        //8. Знайти суму непарних позитивних елементів.
        console.log(`Cумма положительных не парных элементов равна ${odd.reduce((acc,cur)=>acc+=cur)}`)

        //9. Знайти добуток позитивних елементів.
        console.log(`Добуток позитивних елементів дорівнюе ${positiveMult}`)
    })()
}

//10. Знайти найбільший серед елементів масиву, остальні обнулити.
for (let i = 0; i < arr.length; i++) {
    arr[i] < Math.max(...arr) ? arr.splice(i, 1, 0) : null
}
//P.s Решил мутировать исходный массив
console.log(arr)