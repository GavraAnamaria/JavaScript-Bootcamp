//has own peop -> nu cauta la stramosii pe care i mosteneste-> doar in clasa
//product.__proto__ -> stramos
const product = {
    name: 'bbbb'
}

Object.prototype.hasOwnProperty = ()=> 'abc'

console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)


const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
let game1



window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = ()=>{
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}
const startGame = async () => {
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()



///----------->versiune asincrona
getPuzzle().then((puzzle)=> {
    console.log(puzzle)
}).catch((err)=>{
    console.log(`Error: ${err}`)
})

//--------->versiune sincrona

// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('verif')


//
// //-----------------------------> HTTP request
//
// const request = new XMLHttpRequest()
//
// request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState ===4 ) {
//         if (e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             console.log(data.puzzle)
//         } else
//             console.log('error')
//             }
// })
// request.open('GET', 'https://puzzle.mead.io/puzzle')
// request.send()
//
//
// //
// // const ctyCode = "US"
// // const ctyRequest = new XMLHttpRequest()
// //
// // ctyRequest.addEventListener('readystatechange', (e)=>{
// //     if(e.target.readyState ===4 ) {
// //         if (e.target.status === 200) {
// //             const data = JSON.parse(e.target.responseText)
// //             const cty = data.find((cty) => cty.alpha2Code === ctyCode)
// //             console.log("nume:"+ cty.name)
// //         } else
// //             console.log('error')
// //             }
// // })
// // ctyRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
// // ctyRequest.send()


// //-----------------------------> fetch
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) =>{
//     if(response.status){
//         return response.json()
//     }else{
//         throw new Error('unable to fetch the puzzle')
//     }
// }).then((data)=>{
//      console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })