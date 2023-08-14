const square = (num) => num*num
const people = [{
    name:'a',
    age: 27
},{
    name:'b',
    age: 33
},{
    name:'c',
    age: 22
},{
    name:'d',
    age: 11
},]
const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const age22 = people.find((person)=> person.age === 22)
console.log(age22)