const greetingBtn = document.getElementById('promptGreeting')


greetingBtn.addEventListener('click', ()=> {
    const name = prompt('Please enter your name')
    if(!name){
        alert(`Hello anonimus! How are you?`)
    } else if(name.match(/^[A-Z][a-z]{2,11}/)){
        alert(`Hello ${name}! How are you?`)
    } else {
        alert('Name should starts from uppercase letter and consist from 1 to 12 letters')
    }
    
})