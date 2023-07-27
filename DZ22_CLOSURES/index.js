function cacheCounter(a){
    let acc = a
    return function(b){
        return acc += b
    }
}

const sum = cacheCounter(0)
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))