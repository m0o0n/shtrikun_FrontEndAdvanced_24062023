function sumReducer(state, action) {
    switch (action) {
        case '/':
            return state.secondNum !== '0' 
            ? Number(state.firstNum) / Number(state.secondNum) 
            : "На ноль делить нельзя"
        case '*':
            return Number(state.firstNum) * Number(state.secondNum)
        case '-':
            return Number(state.firstNum) - Number(state.secondNum)
        case '+':
            return Number(state.firstNum) + Number(state.secondNum)
        case '%':
            return state.secondNum !== '0' 
            ? Number(state.firstNum) % Number(state.secondNum) 
            : "На ноль делить нельзя"
    }
}

function validator(firstNum, secondNum, mathOperation) {
    const err = {message: ''}
    function setErr(val) {
        console.log(val)
        err.message = `${err.message}\n ${val}`
    }

    if (!firstNum.match(/^-\d{1,}|\d{1,}/)) {
        setErr('- First argument is incorect it should be numeric symbol')
    } 
    if(!secondNum.match(/^-\d{1,}|\d{1,}/)){
        setErr('- Second argument is incorect it should be numeric symbol')
    }
    if(!mathOperation.match(/[+\-*%\/]/)) {
        setErr(' - Math Operation argument is incorect it should be "-, +, *, /, %" symbol')
    }
    if(firstNum.match(/^-\d{1,}|\d{1,}/) 
    && secondNum.match(/^-\d{1,}|\d{1,}/) 
    && mathOperation.match(/[+\-*%\/]/)){
        err.message = ''
    }
    
    return err.message
}

const calcBtn = document.getElementById('calculator')

calcBtn.addEventListener('click', () => {
    const firstNum = prompt('Enter First number')
    const secondNum = prompt('Enter Second number')
    const mathOperation = prompt('Enter math operaion')
    const message = validator(firstNum, secondNum, mathOperation)
    if(!message){
        const result = sumReducer({ firstNum, secondNum }, mathOperation)
        alert(`${firstNum} ${mathOperation} ${secondNum} = ${result}`)
    }else {
        alert(message)
    }
    
    
})