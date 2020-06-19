const request=require('request')

const forecast=(lattitude,longitude,callback)=> {
    const url="http://api.openweathermap.org/data/2.5/forecast?lat="+ lattitude + "&lon="+longitude +"&appid=e1dc4aa2d9007e580bdcf02786abba3e"
    request( {url, json:true}, (error,response) => {
        if(error){
            callback('Page is wrong',{lattitude:undefined, longitude:undefined})
        }
        else {
            const data=response.body.list[0].weather[0].description
            callback(undefined, data)
        }
    })
}

module.exports= forecast
