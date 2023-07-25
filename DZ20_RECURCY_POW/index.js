const recurcyPow = (num, degree) => (
    degree === 1 ? num : num * recurcyPow(num, degree-1)
)
console.log(recurcyPow(4, 2))