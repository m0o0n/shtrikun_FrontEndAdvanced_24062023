const calculateBtn = document.querySelector('#calculate')

calculateBtn.addEventListener('click', () => {
    const hours = prompt('Please enter quantity of hours to convert in seconds (it should be the number)')
    if(hours && !isNaN(hours)){
        const hoursToPositiveNum = Math.abs(hours)
        const seconds = hoursToPositiveNum * 3600
        alert(`${hoursToPositiveNum} hours equals ${seconds} seconds`)
    } else {
        alert('You enter incorect value')
    }
})
