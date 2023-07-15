const array = [1, 2, 3, 4, 5, 6, 7];
const removeElement = (array, item) => {
    const indexOf = array.indexOf(item)
    if(indexOf >= 0) {
        array.splice(indexOf, 1)
    }else {
        alert("Такого элемента не существует в массиве")
    }
}
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]