//1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
{
    (() => {
        const numsArr = []
        for (let i = 10; i <= 20; i++) {
            numsArr.push(i)

        }

        console.log(
            `1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
        \n${numsArr.join(', ')}`
        )

    })()
}

//2. Вивести квадрати чисел від 10 до 20.
{
    (() => {
        const powsArr = []
        for (let i = 10; i <= 20; i++) {
            powsArr.push(`Число ${i} возведенное в квадрат = ${Math.pow(i, 2)}`)

        }

        console.log(
            `2. Вивести квадрати чисел від 10 до 20.
        \n${powsArr.join('\n')}`
        )

    })()
}


//3. Вивести таблицю множення на 7.
{
    (() => {
        const mult7 = []
        for (let i = 1; i <= 10; i++) {
            mult7.push(`7 * ${i}  = ${7 * i}`)

        }

        console.log(
            `3. Вивести таблицю множення на 7.
        \n${mult7.join('\n')}`
        )

    })()
}

//4. Знайти суму всіх цілих чисел від 1 до 15.
{
    (() => {
        let sum = 0
        for (let i = 1; i <= 15; i++) {
            sum += i

        }

        console.log(
            `4. Знайти суму всіх цілих чисел від 1 до 15.
        \n${sum}`
        )

    })()
}

//5. Знайти добуток усіх цілих чисел від 15 до 35.
{
    (() => {
        const multArr = []
        let mult = 1
        for (let i = 15; i <= 35; i++) {
            multArr.push(i)
            mult *= i

        }

        console.log(
            `5. Знайти добуток усіх цілих чисел від 15 до 35.
        \n${mult}`
        )
        //второй метод console.log(multArr.reduce((acc, curr)=> acc *= curr))

    })()
}

//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
{
    (() => {
        let mathAverage = 0
        for (let i = 1; i <= 500; i++) {
            mathAverage += i

        }

        console.log(
            `6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
        \n${mathAverage / 500}`
        )

    })()
}

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
{
    (() => {
        let pairedSum = 0
        for (let i = 30; i <= 80; i++) {
            if (i % 2 === 0) {
                pairedSum += i
            }

        }

        console.log(
            `7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
        \n${pairedSum}`
        )

    })()
}

//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
{
    (() => {
        const multiplies3 = []
        for (let i = 100; i <= 300; i++) {
            if (i % 3 === 0) {
                multiplies3.push(i)
            }

        }

        console.log(
            `8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
        \n${multiplies3.join(', ')}`
        )

    })()
}

//9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//10. Визначити кількість його парних дільників.
//11. Знайти суму його парних дільників.
{
    (() => {
        let naturalNum = Number(prompt("Please enter natural number"))
        naturalNum = Math.abs(naturalNum)
        const naturalCountersArr = []
        const naturalPairedContersArr = []
        let naturalPairedContersSum = 0
        if (Number.isInteger(naturalNum) && naturalNum !== 0) {
            for (let i = 1; i <= naturalNum; i++) {
                if (naturalNum % i === 0) {
                    naturalCountersArr.push(i)
                    if (i % 2 === 0) {
                        naturalPairedContersArr.push(i)
                        naturalPairedContersSum += i
                    }
                }

            }
            console.log(
                `9. Дано натуральне число ${naturalNum}. Знайти та вивести на сторінку всі його дільники.
            \n${naturalCountersArr.join(', ')}`
            )

            console.log(
                `10. Визначити кількість його парних дільників.
            \n${naturalPairedContersArr.length}`
            )

            console.log(
                `11. Знайти суму його парних дільників.
            \n${naturalPairedContersSum}`
            )

        } else {
            console.log(
                `9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
        \n Было введено некоректное значение
        \n Выполнение пунктов 10 и 11 невозможно`
            )
        }
    })()
}

//12. Надрукувати повну таблицю множення від 1 до 10.
{
    (() => {
        const mathMultTable = []
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                mathMultTable.push(`${i} * ${j} = ${i * j}`)
                if (i === 10 && j === 10) {
                    console.log(
                        `12. Надрукувати повну таблицю множення від 1 до 10.
                \n${mathMultTable.join('\n')}`
                    )
                }
            }
        }
    })()
}