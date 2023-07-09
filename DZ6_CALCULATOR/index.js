const calculateBtn = document.querySelector('#calculator')

const calculateReducer = (state, action) => {
    switch(action) {
        case 'add':
           return `${state.firstNum} + ${state.secondNum} = ${Number(state.firstNum) + Number(state.secondNum)}`
        case 'sub':
            return `${state.firstNum} - ${state.secondNum} = ${Number(state.firstNum) - Number(state.secondNum)}`
        case 'mult':
            return `${state.firstNum} * ${state.secondNum} = ${Number(state.firstNum) * Number(state.secondNum)}`
        case 'div':
           return Number(state.secondNum) !== 0 
            ? `${state.firstNum} / ${state.secondNum} = ${Number(state.firstNum) / Number(state.secondNum)}` 
            : 'На ноль делить нельзя'
        default:
            return `Пользователь ввел два операнда: 1. ${state.firstNum} 2. ${state.secondNum} но не выбрал тип операции`
    }
}

const validate = (firstNum, secondNum, mathOperation) => {
    const errors = []
    function isValidNumber(num){
        return (/^-\d{1,}$|^\d{1,}$/).test(num)
    }

    function isValidOperation(operation){
        return (/add|sub|mult|div/).test(operation)
    }
    if (!isValidNumber(firstNum)) {
        errors.push('- First argument is incorect it should be numeric symbol\n')
    } 
    if(!isValidNumber(secondNum)){
        errors.push('- Second argument is incorect it should be numeric symbol\n')
    }
    if(!isValidOperation(mathOperation)) {
        errors.push('- Math Operation argument is incorect it should be "add, sub, mult, div"\n')
    }
    if(errors.length){
        return {message: errors.join('\n'), status: false}
    } return {message: '', status: true}

    
}

calculateBtn.addEventListener('click', () => {
    const mathOperation = prompt('Please enter math operation (it should be "add or sub or mult or div")').trim()
    const firstNum = prompt('Please enter first number').trim()
    const secondNum = prompt('Please enter seconsd number').trim()

    const isValid = validate(firstNum, secondNum, mathOperation)

    if(isValid.status){
        const result = calculateReducer({firstNum, secondNum}, mathOperation)
        alert(result)
    } else {
        alert(isValid.message)
    }
})