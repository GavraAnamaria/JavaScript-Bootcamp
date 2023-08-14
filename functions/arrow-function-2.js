const add = function(a, b){
    console.log(arguments)
}
add(11, 22, 33, 44)



const add2 = function(){
    return arguments[0] + arguments[1]
}
console.log(add2(11, 22, 33, 44))


const add3 = ()=>{  //nu functioneste
    return arguments[0] + arguments[1]
}
console.log(add3(11, 22, 33, 44))



const car = {
    color: 'red',
    getSummary: function(){
        return `this car is ${this.color}`
    }
}
console.log(car.getSummary())//'this car is  red'



const car1 = {
    color: 'red',
    getSummary:()=>{
        return `this car is ${this.color}` }
}
console.log(car1.getSummary())///'this car is undef'



const car2 = {
    color: 'red',
    getSummary(){
        return `this car is ${this.color}` }
}
console.log(car1.getSummary())///'this car is red'