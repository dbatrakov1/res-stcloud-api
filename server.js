const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000



const rappers = {
    'Hajime': {
    'name': 'Hajime',
    'address': '4170 W Division St #130, St Cloud, MN 56301'
    },
    'Renaissance': {
    'name': 'Renaissance',
    'address': '2140 Frontage Rd N, Waite Park, MN 56387'
    },
    'Molitors':	{
    'name': 'Molitors',
    'address': '3571 5th Ave NE, Sauk Rapids, MN 56379'
    },
    'Kohinoor':	{
    'name': 'Kohinoor',
    'address': '17 7th Ave S, St Cloud, MN 56301'
    },
    'Olde Brick House':	{
    'name': 'Olde Brick House',
    'address': '102 6th Ave S, St Cloud, MN 56301'
    }
}
let randNumberForObject = Math.floor(Math.random() * (Object.keys(rappers).length))

//function return random key (Each key-value pair is called a property.)
function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

//sent rendom property
app.get('/random', (request, response) =>{
    response.json(rappers[getRandomProperty(rappers)])
})
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()

    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
    console.log(Object.keys(rappers).length)//return object rappers length
    console.log(randNumberForObject)
})