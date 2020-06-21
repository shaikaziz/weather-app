const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//all paths
const app=express()
const staticpath=path.join(__dirname,'../pages')
const viewspath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partial')

//set handlebars
app.set('view engine','hbs')
app.set('views',viewspath)
app.use(express.static(staticpath))
hbs.registerPartials(partialpath)

//index page
app.get('',(req,res)=>{
    res.render('index',{
        title:'Home Page',
        name:'Aziz'
    })
})

//about
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Aziz'
    })
})

//json wweather object
app.get('/weather',(req,res)=> {
    if(!req.query.address){
        return res.send('No place given')
    }
    geocode.geocode( req.query.address, (error, data)=>{

        if(error){
            return res.send('No location in geocode')
        }
        forecast.forecast( data.lattitude, data.longitude, (error, forecastdata)=>{
            if(error){
                return res.send('error in forecast')
            }
            res.send({
                location: data.location,
                answer:forecastdata
            })
        } )

    } )

})


//help
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Aziz'
    })
})


//help error
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'Error',
        name:'Aziz',
        errormessage:'No help page found'
    })
})
//error
app.get('/*',(req,res)=>{
    res.render('404',{
        name:'Aziz',
        title:'ERROR PAGE',
        errormessage:'No page found'
    })
})

//starting server
app.listen(3000,()=>{
    console.log('server started');
    
})