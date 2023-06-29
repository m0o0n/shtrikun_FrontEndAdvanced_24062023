const btn = document.getElementById('greeting')

btn.addEventListener('click', () => {
    const name = prompt('enter name')
    console.log(`your name is ${name}`)
})

