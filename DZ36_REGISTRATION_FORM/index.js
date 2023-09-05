const form = document.querySelector('.registration')
const languages = document.querySelectorAll('#languages input')
const err = document.querySelector('.err')
const table = document.querySelector('table')
const tableRow = document.querySelector('table tbody tr')
const isValid = (fd) => {
    return ![...fd].filter(e => !e[1].trim()).length ? true : false
}
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const checked = Array.from(languages).reduce((acc, cur) => cur.checked ? acc = [...acc, cur.value] : acc, [])
    fd.append('languages', checked)
    const data = Object.fromEntries([...fd])
    if(isValid(fd)) {
        err.style.display = 'none'
        form.style.display = 'none'
        table.style.display = 'table'
        Object.entries(data).forEach(e => {
            const td = document.createElement('td')
            td.innerText = e[1]
            tableRow.append(td)
        })
    } else {
        err.style.display = 'flex'
    }
})