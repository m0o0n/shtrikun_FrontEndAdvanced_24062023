const body = document.body
const ul = document.createElement('ul')
body.append(ul)
const arr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]

function generateList(arr){
   return arr.reduce((acc, cur)=>{
        if(!Array.isArray(cur)){
            return acc = acc.concat(`<li>${cur}</li>`)
        }
        
        return acc = acc.concat(`
            <li>
                <ul>
                    ${
                        generateList(cur)
                    }
                </ul>
            </li>
        `)
    }, '')
}

ul.innerHTML = generateList(arr)