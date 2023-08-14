
class Employee extends PersonClass{
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.firstName} is a ${this.position}`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

const he = new Employee('abc', 'def', 22, 'student', ['a', 'b'])
he.fullName='ana maria'
console.log(he.getBio())
console.log(he.getYearsLeft())