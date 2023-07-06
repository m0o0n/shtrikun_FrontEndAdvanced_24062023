const average = document.querySelector('#average')

average.addEventListener('click', ()=>{
    const first = prompt('Enter first value')
    const second = prompt('Enter second value')
    const third = prompt('Enter third value')
    const sum = Number(first) + Number(second) + Number(third)
    const condition = ((first && first.match(/^-\d{1,}|\d{1,}/)) 
    && (second && second.match(/^-\d{1,}|\d{1,}/)) 
    && (third && third.match(/^-\d{1,}|\d{1,}/)))

    if(condition){ 
        alert(`Arithmetical mean equals: ${(sum/3).toFixed(2)}`)
    } else {
        alert('one of prompts is incorect value')
    }
    
})