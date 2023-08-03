class Student {
    constructor(name, lastName, year){
        this.name = name
        this.surname = lastName
        this.year = year
    }
    grades = []
    attendance = new Array(25)
    iterator = 0
    makeGrage(mark){
        this.grades.push(mark)
        return this
    }
    summary(){
        console.log(this.grades, this.attendance)
        const countOfLessons = this.attendance.filter(l => l !== undefined).length
        const countOfPresent = this.attendance.filter(l => l === true).length
        const meanMark = countOfLessons ? this.grades.reduce((acc, cur) => acc += cur, 0) / countOfLessons : 1
        const meanPresent = countOfLessons ? countOfPresent / countOfLessons : 1
        switch(true){
            case meanPresent >= 0.9 && meanMark >= 90:
                return "Молодець!"
            case meanPresent < 0.9 && meanMark >= 90 || meanPresent >= 0.9 && meanMark < 90:
                return "Добре, але можна краще "
            default: return "Редиска!"
        }
        
    }
    getAge(){
        const curentDate = new Date
        return `Возраст ${curentDate.getFullYear() - this.year}`
    }
    getMeanGrade(){
        const countOfLessons = this.attendance.filter(l => l !== undefined).length
        const meanMark = countOfLessons ? this.grades.reduce((acc, cur) => acc += cur, 0) / countOfLessons : 1
        return `Средняя оценка ${meanMark}`
    }
    present(mark = 0){
        if(this.iterator < 25){
            this.attendance[this.iterator] = true
            this.iterator++
            this.makeGrage(mark)
        } else {
            console.log('Больше нет мест в ячейках для посешния')
        }
        return this
    }
    absent() {
        if(this.iterator < 25){
            this.attendance[this.iterator] = false
            this.iterator++
        } else {
            console.log('Больше нет мест в ячейках для посешния')
        }
        return this
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