// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.


class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}

class Appartament {

    residents = []

    addResidents(resident) {
        if(resident instanceof Human){
            this.residents.push(resident)
        }
    }
}

class House {
    constructor(maxCountAppartaments){
        this.maxCountAppartaments = maxCountAppartaments
    }
    appartaments = []
    addAppartament(appartament){
        if(appartament instanceof Appartament && this.appartaments.length < this.maxCountAppartaments){
            this.appartaments.push(appartament)
        }else if(this.appartaments.length >= this.maxCountAppartaments){
            console.log('В этом доме нет места')
        } else {
            console.log('Дом должен принимать в себя экземпляр класса квариты')
        }
    }
}

const gena = new Human('Gena', 'male')
const cheburashka = new Human('Cheburashka', 'male')

const barbie = new Human('Margot Robbie', 'female')
const ken = new Human('Raian Gosling', 'male')

const apt1 = new Appartament()
apt1.addResidents(gena)
apt1.addResidents(cheburashka)
console.log(apt1)

const apt2 = new Appartament()
apt2.addResidents(barbie)
apt2.addResidents(ken)
console.log(apt2)

const building1 = new House(2)
building1.addAppartament(apt1)
building1.addAppartament(apt2)

console.log(building1)