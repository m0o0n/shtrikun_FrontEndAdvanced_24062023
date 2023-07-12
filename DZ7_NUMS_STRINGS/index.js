const concatinate = document.querySelector('#concatinate')

concatinate.addEventListener('click', ()=> {
    const string1 = prompt("Enter first string").trim()
    const string2 = prompt("Enter second string").trim()
    const string3 = prompt("Enter third string").trim()
    
    let resultString = ''
    resultString = resultString.concat(string1, ' ', string2, ' ', string3)
    alert(resultString) 

    //Alrernate variant
    // let resultArray = []
    // resultArray = resultArray.concat(string1, string2, string3).join(' ')
    // alert(resultArray)
})

const someNumber = 12345
alert(someNumber.toString().split('').join(' '))