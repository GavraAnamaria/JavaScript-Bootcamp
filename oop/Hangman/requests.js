// const getPuzzle = ()=>
//     new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()
//
//         request.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4) {
//                 if (e.target.status === 200) {
//                     const data = JSON.parse(e.target.responseText)
//                     resolve(data.puzzle)
//                 } else
//                     reject('Error')
//             }
//         })
//         request.open('GET', 'https://puzzle.mead.io/puzzle')
//         request.send()
//     })


const getPuzzle = ()=>{
   return fetch('http://puzzle.mead.io/puzzle').then ((response)=>{
        if(response.status === 200) {
            return response.json()
        }else{
            throw new Error('unable to fetch the puzzle')
        }
    }).then((data)=>{
        return data.puzzle
    })
}



const getPuzzleSync = (callback)=>{
    const request = new XMLHttpRequest()
    request.open('GET', 'https://puzzle.mead.io/puzzle', false)
    request.send()

        if( request.readyState ===4 ) {
            if ( request.status === 200) {
                const data = JSON.parse( request.responseText)
                return data.puzzle
            } else
                throw new Error('baiuri')
        }
}