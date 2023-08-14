
//documentatii metode string => mdn string/math/num/
let password='  anc1234  '
console.log(password.includes('c12'))
console.log(password.trim())


let num = 123.556
console.log(num.toFixed(10))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//generare numar aleator intre min si max
const max = 50;
const min = 10;
let randomNum = Math.floor(Math.random()*(max-min+1)) + min
console.log(randomNum);