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