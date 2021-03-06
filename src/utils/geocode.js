const request=require('request')
const geocode=(address, callback)=>{
    const urlMAP='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXppei1sbyIsImEiOiJja2JldG9tNnAwb3d2MnFtMmx3c3VraXNpIn0.N0cm5ixLNAfr8rcHgZE2gw'
    // const urlMAP='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXJzaGlscmlheiIsImEiOiJja2JkbmtjMGMwZGtkMnluc3BiM2Q2c3U3In0.Pe96hG5Xg2CDlTUc13_JYw&limit=1'
    request( {url:urlMAP, json:true},(error,response)=>{
        if(error){
            callback('Wrong URL',undefined)
        }
        else if(response.body.features.length===0){
            callback('No Location found',undefined)
        }
        else{
            callback(undefined,{
                lattitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports={
    geocode:geocode
}