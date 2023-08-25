const reactions = document.querySelector('.reactions')
function counter(count){
    let counter = count ? Number(count) : 0
    return counter += 1
}
reactions.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        e.target.nextElementSibling.innerText = counter(e.target.nextElementSibling.innerText)
    }
})