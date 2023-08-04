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
            return this.input()
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


