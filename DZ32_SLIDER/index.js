const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg',
    './assets/7.jpg',
    './assets/8.jpg',
    './assets/9.jpg',
    './assets/10.jpg',
]

const slick = document.querySelector('.slick')
slick.innerHTML = generateSlides(images)
const slides = document.querySelectorAll('.slick .slide')
const slider = document.querySelector('.slider')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const track = document.querySelector('.track')
const maxScroll = slick.children.length - 1
let scrollCount = 0

if(scrollCount === maxScroll){
    prev.style.display="flex"
    next.style.display="none"
} else if(scrollCount === 0){
    prev.style.display="none"
    next.style.display="flex"
}

function generateSlides(arr){
    return arr.reduce((acc,cur)=>{
        return acc = acc.concat(`
            <div class="slide"><img src="${cur}" alt="" /></div>
        `)
    }, '')
}


next.addEventListener('click', () => {
    if (scrollCount < maxScroll) {
        scrollCount++ 
        console.log(scrollCount, maxScroll)
        track.scroll({
            left: scrollCount*slider.clientWidth,
            behavior: "smooth",
        })
        prev.style.display="flex"
    }
    if(scrollCount === maxScroll) {
        next.style.display="none"
    }
})

prev.addEventListener('click', () => {
    if (scrollCount > 0) {
        scrollCount--
        track.scroll({
            left: scrollCount*slider.clientWidth,
            behavior: "smooth",
        })
        next.style.display="flex"
    }
    if(scrollCount === 0) {
        prev.style.display="none"
    }
})
slides.forEach(e => {
    e.style.width = slider.clientWidth + 'px'
})
window.addEventListener('resize', () => {
    slides.forEach(e => {
        e.style.width = slider.clientWidth + 'px'
    })
    track.scroll({
        left: scrollCount*slider.clientWidth,
    })
});