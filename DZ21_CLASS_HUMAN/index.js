class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getInfo() {
        const properties = {
            name: this.name,
            age: this.age
        }
        console.log(properties)
        return properties
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand
        this.model = model
        this.year = year
        this.licensePlate = licensePlate
    }

    owner
    
    setOwner(owner) {
        if (owner instanceof Human && owner.age >= 18) {
            this.owner = owner      
        } else {
            console.log('Human is too young to be owner of car')
        }
    }

    getInfo() {
        const properties = {
            brand: this.brand,
            model: this.model,
            year: this.year,
            licensePlate: this.licensePlate,
            owner: this.owner 
            ? this.owner.getInfo()
            : null
        }
        console.log(properties)
        return properties
    }

}

const brianOkonor = new Human('Brian Okonor', 27)
const sonOfDominkToreto = new Human('Black Brian', 13)

const nissanSkyLine = new Car('nissan', 'sky line', '1999', '7777')
const doggeCharger = new Car('dogge', 'charger', '1969', '6666')


nissanSkyLine.setOwner(brianOkonor)
nissanSkyLine.getInfo(brianOkonor)
brianOkonor.getInfo()

doggeCharger.setOwner(sonOfDominkToreto)
doggeCharger.getInfo()
sonOfDominkToreto.getInfo()