const text = document.querySelector('#text')
const ghost = document.querySelector('#ghost')

text.addEventListener('click', () => {
    text.focus();
    ghost.style.display = 'block';
})

text.addEventListener('focusout', ()=>{
    ghost.style.display = 'none';
})