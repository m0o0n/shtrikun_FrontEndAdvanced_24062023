const calcBtn = document.querySelector('#calculate')

class SuperMath {
    x = null
    y = null
    znak = null
    obj = null
    isConfirm=null
    check(){
        this.isConfirm = confirm(`Do you want to make operation ${this.obj.znak} with X = ${this.obj.x} and Y = ${this.obj.y}`)
        if(this.isConfirm){
           return this._doMath(this.obj.x, this.obj.y, this.obj.znak)
        } else {
            this.input()
        }
    }
    input(){
        this.x = prompt("Enter X value it should be number")
        this.y = prompt("Enter Y value it should be number")
        this.znak = prompt('Please enter znak (+ - / * %)')
        this._createObj(this.x, this.y, this.znak)
        return this
    }
    _createObj(x, y, znak){
        if(x && !isNaN(x) && y && !isNaN(y) && new RegExp(/[\+\-*\/%]/).test(znak)){
            this.obj = {x, y, znak}
        } else {
            console.log('Вы ввели некорктные значения повторите операцию ещё раз')
            this.input()
        }
    }
    _doMath(x, y, znak) {
        x = Number(x)
        y = Number(y)
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
            default:
                return 'Вы выбрали не существующую операцию'
        }
    }
}
const p = new SuperMath()
calcBtn.addEventListener('click', ()=>{
    const result = p.input().check()
    console.log(result)
})


// Вариант 2, но как по мне первый лучше не смотря на то что немного не по тз
// const calcBtn = document.querySelector('#calculate')
// function createObj(x, y, znak){
//     if(x && !isNaN(x) && y && !isNaN(y) && new RegExp(/[\+\-*\/%]/).test(znak)){
//         return {x: Number(x), y: Number(y), znak}
//     } else {
//         console.log('Вы ввели некорктные значения повторите операцию ещё раз')
//         return false
//     }
// }
// class SuperMath {
//     isConfirm=null
//     x = null
//     y = null
//     znak = null
//     obj = null
//     check(obj){
//         this.isConfirm = obj ? confirm(`Do you want to make operation ${obj.znak} with X = ${obj.x} and Y = ${obj.y}`) : false
//         if(this.isConfirm){
//            return this._doMath(obj.x, obj.y, obj.znak)
//         } else {
//            return this.input()
//         }
//     }
//     input(){
//         this.x = prompt("Enter X value it should be number")
//         this.y = prompt("Enter Y value it should be number")
//         this.znak = prompt('Please enter znak (+ - / * %)')
//         this.obj = createObj(this.x, this.y, this.znak)
//         return this.check(this.obj)
//     }
   
//     _doMath(x, y, znak) {
//         switch (znak) {
//             case '+':
//                 return `${x} + ${y} = ${x + y}`
//             case '-':
//                 return `${x} - ${y} = ${x - y}`
//             case '*':
//                 return `${x} * ${y} = ${x * y}`
//             case '/':
//                 return y !== 0 ? `${x} / ${y} = ${x / y}` : 'На ноль делить нельзя'
//             case '%':
//                 return y !== 0 ? `${x} % ${y} = ${x % y}` : 'На ноль делить нельзя'
//             default:
//                 return 'Вы выбрали не существующую операцию'
//         }
//     }
// }
// const p = new SuperMath()
// calcBtn.addEventListener('click', ()=>{
//     let x = prompt("Enter X value it should be number")
//     let y  = prompt("Enter Y value it should be number")
//     let znak = prompt('Please enter znak (+ - / * %)')
//     let obj = createObj(x, y, znak)
//     const result = p.check(obj)
//     console.log(result)
// })
