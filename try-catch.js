const getTip = (amount)=>{
    if(typeof amount === 'number')
        return amount* .25
    else
        throw 'nu i numar'
}

try{
    console.log(getTip('10'))
}catch (e){
    console.log("tot nu i umar")
}