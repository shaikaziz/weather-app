const path=require('path')
const express=require('express')
const hbs=require('hbs')
// const hbs = require('hbs')

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

//json
app.get('/products',(req,res)=>{
    if(!req.query.search)
       return res.send({
            error:'give something'
        })
    res.send({
        area:'china',
        search:req.query.search
    })
})


//help
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Aziz'
    })
})

//weather
app.get('/weather',(req,res)=>{
    res.send('This is the weather');
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