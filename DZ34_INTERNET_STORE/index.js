const products = [
    { id: 0, title: 'Iphone 5', year: '2013', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 0 },
    { id: 1, title: 'Iphone 6', year: '2014', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 0 },
    { id: 2, title: 'Iphone 7', year: '2015', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 0 },
    { id: 3, title: 'Asus Aspire', year: '2019', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 1 },
    { id: 4, title: 'Mac book Air', year: '2021', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 1 },
    { id: 5, title: 'Lenvo A11809', year: '2018', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 1 },
    { id: 6, title: 'Indesit X32422', year: '2022', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 2 },
    { id: 7, title: 'Samsung RB36T677', year: '2022', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 2 },
    { id: 8, title: 'Bosh ice', year: '2022', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita quam sunt amet illum optio voluptatum quoad porro ex ipsam adipisci atque voluptas quidem, sequi,rem odit corporis? Ipsa.", categoryId: 2 },
]

const categories = [
    { id: 0, title: "Телефоны" },
    { id: 1, title: "Компютеры" },
    { id: 2, title: "Холодильники" },
]

const nav = document.querySelector('.nav')
const productList = document.querySelector('.products')
const info = document.querySelector('.info')

categories.forEach((e) => {
    const span = document.createElement('span')
    span.setAttribute('data-category', e.id)
    span.innerText = e.title
    nav.append(span)
})

nav.addEventListener('click', (e) => {
    if (e.target.tagName === "SPAN") {
        const categoryId = Number(e.target.dataset.category)
        const searchedProducts = products.filter(e => e.categoryId === categoryId)
        productList.innerHTML = searchedProducts.reduce((acc, cur) => {
            return acc = acc.concat(
                `
                    <div data-id="${cur.id}" class="product_card">
                        <h2>${cur.title}</h2>
                        <p><strong>Year: </strong>${cur.year}</p>
                        <button>info</button>
                    </div>
                `
            )
        }, '')
        e.target.parentNode.querySelector('span.active') ? e.target.parentNode.querySelector('span.active').classList.remove('active') : null
        e.target.classList.add('active')
        info.innerHTML = ''
    }
    
})

productList.addEventListener('click', (e)=>{
    if(e.target.tagName === "H2" || e.target.tagName === "BUTTON"){
        const currentProductId = Number(e.target.parentNode.dataset.id)
        const currentProduct = products.find(e => e.id === currentProductId)
        info.innerHTML = `
            <h1>${currentProduct.title}</h1>
                <p>
                   <strong>Year</strong> ${currentProduct.year}
                </p>
                <p>
                    ${currentProduct.info}
                </p>
            <button>Купить</button>
        `
    }
})

info.addEventListener('click', (e)=>{
    if(e.target.tagName === "BUTTON"){
        alert('Товар придбано')
        productList.innerHTML = ''
        info.innerHTML = ''
        nav.querySelector('span.active').classList.remove('active')
    }
})