function createSum(a){
    let acc = a
    return (b) => acc +=b
}

const sum = createSum(0)
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))