//prototypal inheritance
//-------------------------------------> METODA 1
 class PersonClass{
    constructor(firstName, lastName, age, likes=[]){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes=likes
    }
    getBio(){
        let bio= `${this.firstName} is ${this.age}`
        this.likes.forEach((like) => {bio = bio+ `${this.lastName} likes ${like}`})
        return bio
    }
    set fullName (fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }

}

let myPerson = new PersonClass()
console.log(myPerson.getBio())




//-------------------------------------> METODA 2

const Person = function(firstName, lastName, age, likes=[]){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes=likes
}
const me = new Person('ana', 'abc', 27, ['sleeping', 'sleeping'])
const you = new Person('ana2', 'abcdef', 55)


//-----------------------------prototypal inheritance
Person.prototype.getBio = function(){
    let bio= `${this.firstName} is ${this.age}`
    this.likes.forEach((like) => {bio = bio+ `${this.lastName} likes ${like}`})
    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

Person.prototype.location = 'China'

//
// Person.prototype.getBio = function (){
//     return 't'
// }
// me.getBio = function (){
//     return 'm'
// }

//----------------------------------------------------


me.setName("ba nana")
console.log(me.getBio())
console.log(you.location)


