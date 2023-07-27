const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const getRandomNum = (max) => (Math.floor(Math.random() * max))

function generateKey(length, characters){
    let result = ''
    for (let i = 0; i <= length; i++) {
        result = result.concat(characters[getRandomNum(characters.length)])
    }
    return result
}
const key = generateKey(16, characters);
console.log(key); 