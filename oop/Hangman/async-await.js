const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num  === 'number' ? resolve(num*2):reject('NR')
    }, 2000)
})
const processData = async ()=>{
    const Data = await getDataPromise(2)
    console.log(Data)
}

processData().then((data) => {
    console.log('data', data)
}).catch((error)=>{
    console.log("error", error)
})