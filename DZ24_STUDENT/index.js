class Student {
    constructor(name, lastName, year){
        this.name = name
        this.surname = lastName
        this.year = year
    }
    grades = []
    attendance = new Array(25)
    iterator = 0
    
    getAge(){
        const curentDate = new Date
        return `Возраст ${curentDate.getFullYear() - this.year}`
    }
    getMeanGrade(){
        const countOfLessons = this.attendance.filter(l => l !== undefined).length
        const meanMark = countOfLessons ? this.grades.reduce((acc, cur) => acc += cur, 0) / countOfLessons : "Оценка отсутсвует"
        return `Средняя оценка ${meanMark}`
    }
    _makeGrage(mark){
        this.grades.push(mark)
    }
    fixGrade(lessonIndex, mark) {
        this.grades[lessonIndex] = mark
        return this
    }
    present(mark = 0){
        if(this.iterator < 25){
            this.attendance[this.iterator] = true
            this.iterator++
            this._makeGrage(mark)
        } else {
            console.log('Больше нет мест в ячейках для посещения')
        }
        return this
    }
    absent() {
        if(this.iterator < 25){
            this.attendance[this.iterator] = false
            this.iterator++
            this._makeGrage(0)
        } else {
            console.log('Больше нет мест в ячейках для посещения')
        }
        return this
    }

    summary(){
        console.log(this.grades, this.attendance)
        const countOfLessons = this.attendance.filter(l => l !== undefined).length
        const countOfPresent = this.attendance.filter(l => l === true).length

        //Вариант 1
        // тут сделал среднюю оценку в зависимости от кол-ва уроков по принципу что за каждый урок ученик получает оценку 
        const meanMark = countOfLessons ? this.grades.reduce((acc, cur) => acc += cur, 0) / countOfLessons : null

        //Вариант 2
        // тут сделал среднюю оценку в зависимости от кол-ва оценок по принципу что оценок можно получить любое количество
        // но тогда метод _makeGrage уже не будет приватным
        // const meanMark = this.grades.length ? this.grades.reduce((acc, cur) => acc += cur, 0) / this.grades.length : 0


        //В условии не написано как правильно должна считаться средняя оценка так что оставлю вариант который мне нравиться 


        const meanPresent = countOfLessons ? countOfPresent / countOfLessons : null
        switch(true){
            case meanPresent >= 0.9 && meanMark >= 90:
                return "Молодець!"
            case meanPresent < 0.9 && meanMark >= 90 || meanPresent >= 0.9 && meanMark < 90:
                return "Добре, але можна краще"
            case countOfLessons === 0:
                return "Поки зарано щось казати"
            default: return "Редиска!"
        }
        
    }
}

const vlad = new Student('Vlad', 'Shtrikun', 2000)

vlad
.present(100)
.present()
.present()
.present()
.present()
.present(100)
.present(100)
.absent()
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)

// vlad.fixGrade(1, 100).fixGrade(2, 100).fixGrade(3, 100)
console.log(vlad.summary())
console.log(vlad.getAge())
console.log(vlad.getMeanGrade())


const ivan = new Student('Ivan', 'Cheridnichenko', 2000)

ivan
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.present(100)
.absent()
.absent()
.absent()


console.log(ivan.summary())
console.log(ivan.getAge())
console.log(ivan.getMeanGrade())