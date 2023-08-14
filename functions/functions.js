let square = function(num) {
    return num*num
}

console.log(square(3))
console.log(square(30))

//UNDEF & NULL
let name;
console.log(name)
name=null;
console.log(name)
let s = function(num= 9) {
}
console.log(s(2))

let f = function(nume= 'ioana') {
    return `nume = ${nume} \n`
}
console.log(f() + f(" Maria"))