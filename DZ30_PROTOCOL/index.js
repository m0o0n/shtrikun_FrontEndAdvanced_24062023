const input = document.querySelector('#input')
const link = document.querySelector('#link')
let isUrl = /^(http|https):\/\/(\w+\.){1,2}\w{1,3}$/;
let isSubUrl = /^(\w+\.){1,2}\w{1,3}$/;
input.addEventListener('input', (e) => {
    link.innerText = e.target.value
    if (isUrl.test(e.target.value)) {
        link.setAttribute('href', e.target.value)
    } else if (isSubUrl.test(e.target.value)) {
        link.setAttribute('href', `https://${e.target.value}`)
    }else{
        link.setAttribute('href', '#')
    }

})