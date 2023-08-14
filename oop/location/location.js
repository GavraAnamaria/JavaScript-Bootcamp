const getLocation= async () =>{
    const response = await fetch('https://ipinfo.io/json?token=14ceaf730ba150')
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Error')
        }
}


getLocation().then((data)=>{
    console.log(`Location: ${data.city}, ${data.region}, ${data.country}`)
}).catch((err)=>{
    console.log(err)
})