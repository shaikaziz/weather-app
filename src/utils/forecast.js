const request=require('request')

const forecast=(lattitude,longitude,callback)=> {
    const url="http://api.openweathermap.org/data/2.5/weather?lat="+lattitude+"&lon="+longitude+"&appid=e1dc4aa2d9007e580bdcf02786abba3e"
    // riazconst url='http://api.openweathermap.org/data/2.5/weather?lat='+lattitude+'&lon='+longitude+'&appid=e402a4d67c8d6eb9a4104b0807e8776f'
    request( {url, json:true}, (error,response) => {
        if(error){
            callback('Page is wrong',{lattitude:undefined, longitude:undefined})
        }
        else if(!response.body.weather[0].description){
            callback('no location there',{lattitude:undefined, longitude:undefined})
        }
        else {
            const data=response.body.weather[0].description
            callback(undefined, data)
        }
    })
}

module.exports={
    forecast:forecast
}
