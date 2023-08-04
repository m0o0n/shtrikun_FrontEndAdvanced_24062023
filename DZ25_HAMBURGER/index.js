

class Hamburger {
    constructor(size, stuffing) {
        this.size = size
        this.stuffing = stuffing
        this.price = size.cost + stuffing.cost
        this.calories = size.cal + stuffing.cal
        if(size.type !== 'size' || stuffing.type !== 'stuffing'){
            throw new Error('Вы не выбрали размер или начинку') 
        }
    }

    static SIZE_SMALL = { cost: 50, cal: 20, type: 'size' }
    static SIZE_BIG = { cost: 100, cal: 40, type: 'size' }


    static STUFFING_CHEESE = { cost: 10, cal: 20, type: 'stuffing' }
    static STUFFING_SALAD = { cost: 20, cal: 5, type: 'stuffing' }
    static STUFFING_POTATO = { cost: 15, cal: 10, type: 'stuffing' }


    static TOPPING_MAYO = { cost: 20, cal: 5, type: 'topping' }
    static TOPPING_SAUCE = { cost: 15, cal: 0, type: 'topping' }

    addTopping(toping) {
        if (toping.type === 'topping') {
            this.price += toping.cost
            this.calories += toping.cal
        } else {
            console.log('Выберете топинг пожалуйста')
        }

        return this
    }

    calculatePrice() {
        return this.price
    }

    calculate () {
        return this.calories
    }
    
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)

// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculate()} cal`);

// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()} грн`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_MAYO).addTopping(Hamburger.TOPPING_SAUCE)

// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatePrice()} грн`);
