const getDataCallback = (num, callback) => {
    setTimeout(()=>{
        if(typeof num === 'number')
            callback( undefined, num*2)
        // else
            // callback('error data', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if(err){
        console.log(err)
    }else{
        getDataCallback(data, (err, data) =>{
            if(err){
                console.log('err')
            }else
                console.log(data)
        })
    }
})




const getDataPromise = (num) => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof num === 'number' ? resolve(num*2): reject("NaN")
        }, 2000)
    })

getDataPromise(2).then((data)=>{
    getDataPromise(data).then((data)=>{
    console.log(data)
    })
},(err) => {
    console.log(err)
})

getDataPromise(10).then((data)=>{
    return getDataPromise(data) //40
}).then((data)=>{
    return 'test' //80
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

//
// const myPromise = getDataPromise(123)
//
// myPromise.then((data)=> {
//     console.log(data)
// }, (err)=> {
//     console.log(err)
// })
