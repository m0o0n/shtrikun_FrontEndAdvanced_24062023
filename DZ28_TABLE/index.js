const table = document.querySelector('table')

for(let i = 1; i <= 10; i++){
    const tr = document.createElement('tr')
    for (let j = i*10 - 9; j <= i*10; j++) {
        const td = document.createElement('td')
        td.innerText = j
        tr.append(td)
    }
    table.append(tr)
}