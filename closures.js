const myFunction = ()=> {
    const message = 'mesaj'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()



//protejare variabila count prin restrictionare acces
const createCount =()=> {
    let count = 0
    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCount()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0 //inutil
console.log((counter.get()))

const createAdder = (a)=> {
    return (b)=>{
        return a+b;
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-20))
console.log(add100(200))


const tipper = (tip) =>{
    return (t)=>{
        return tip * t;
    }
}

const tip = tipper(.15)
console.log(tip(1000))
const tip2 = tipper(.3)
console.log(tip2(200))

