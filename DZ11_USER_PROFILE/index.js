const createUser = document.querySelector('#create_user')

createUser.addEventListener('click', () => {
    const year = formatPrompt(prompt('В якому році ти народився?'))
    const city = formatPrompt(prompt('В якому місті ти живеш?'))
    const sport = formatPrompt(prompt('Який твій улюблений вид спорту бокс, баскетбол або футбол?'))

    alert(`
        ${getAge(year)}
        ${cityReducer(city)}
        ${sportReducer(sport)}
    `)
})
const formatPrompt = (value) => {
    if(value === null) {
        return ''
    } else {
        return value.trim().toLowerCase()
    }
}
const getAge = (year) => {
    const formatYear = Math.abs(year)
    const date = new Date
    if (
        year
        && !isNaN(year)
        && Number.isInteger(Number(year))
        && date.getFullYear() > formatYear
    ) {
        return `Тобі ${date.getFullYear() - formatYear}`
    } else if (!year) {
        return 'Шкода, що Ви не захотіли ввести свій рік народження'
    } else return 'Ви не коректно ввели ваш рік народження'
}

const cityReducer = (city) => {
    switch (city) {
        case 'київ':
            return 'Ти живеш у столиці України'
        case 'лондон':
            return 'Ти живеш у столиці Англії'
        case 'вашингтон':
            return 'Ти живеш у столиці США'
        case 'париж':
            return 'Ти живеш у столиці Франції'
        case 'берлін':
            return 'Ти живеш у столиці Германії'
        case 'варшава':
            return 'Ти живеш у столиці Польщі'
        case '':
            return 'Шкода, що Ви не захотіли ввести свое місто'
        default: return `Ти живеш у місті ${city[0].toUpperCase() + city.slice(1)}`
    }
}

const sportReducer = (sport) => {
    switch (sport) {
        case 'бокс':
            return 'Круто! Хочеш стати як Майк Тайсон?'
        case 'баскетбол':
            return 'Круто! Хочеш стати як Майкл Джордан?'
        case 'футбол':
            return 'Круто! Хочеш стати як Мессі?'
        case '':
            return 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту'
        default: return 'Круто! Хочеш стати чемпіоном?'
    }
}