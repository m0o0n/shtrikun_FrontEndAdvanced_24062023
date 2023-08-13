const image = document.querySelector('#image')
const randomBtn = document.querySelector('#random')
const setRandomImage = () => {image.setAttribute('src', `./assets/${Math.ceil(Math.random()*10)}.jpg`)}
setRandomImage()
randomBtn.addEventListener('click', ()=>{
    setRandomImage()
})