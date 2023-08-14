class Student extends PersonClass{
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change){
        this.grade += change
    }

    getBio(){
        const status = this.grade>=70 ? 'passing':'falling'
        return `${this.fullName} is ${status} the class.`
    }
}

const she = new Student('abc', 'def', 27, 88, [])
she.updateGrade(-20)
console.log(she.getBio())