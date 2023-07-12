const createArr = document.querySelector('#create')

createArr.addEventListener('click', ()=> {
    let arr = []
    const arrLength = Number(prompt('Please enter length of array it should be from 6 to 10'))
    if(arrLength && arrLength >= 6 && arrLength <= 10) {
        for (let i = 0; i < arrLength; i++) {
            let arrValue = prompt(`Please enter ${i} element of arr (it should be number)`).trim()
            if(!arrValue || isNaN(arrValue)) {
                arr = []
                alert('Вы ввели некоректное значение')
                break
            } else {
                arr.push(Number(arrValue))
                //Процесс внесения данных
                console.log(arr)
            }
         }
         //Сортировка
         console.log(arr.sort((a,b)=> a-b))
         //Видалити елементи з масиву з 2 по 4 (включно!).
         arr.splice(2,3)
         console.log(arr)
    } else {
        alert('Длинна массива должна быть числом от 6 до 10')
    }
    
})
