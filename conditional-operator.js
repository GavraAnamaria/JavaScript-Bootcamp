const myAge = 27
const message = myAge >= 18? 'You can vote!' :'Tou cannot vote!'
console.log(message)

const showPage=()=>{
    console.log('page')
}
const showErrorPage=()=>{
    console.log('err')
}
myAge >=21 ? showPage():showErrorPage()
