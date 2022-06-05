const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    'Hajime': {
    'name': 'Hajime',
    'address': '4170 W Division St #130, St Cloud, MN 56301',
    'googleMapsLink':'https://goo.gl/maps/HLsf32gxfVRW6pFbA',
    'meal': '[dinner, lunch]'
    },
    'Renaissance': {
    'name': 'Renaissance',
    'address': '2140 Frontage Rd N, Waite Park, MN 56387',
    'googleMapsLink':'https://goo.gl/maps/9hvB6gnCCfgTXJ7Q9',
    'meal': '[dinner]'
    },
    'Molitors':	{
    'name': 'Molitors',
    'address': '3571 5th Ave NE, Sauk Rapids, MN 56379',
    'googleMapsLink':'https://goo.gl/maps/ob7a8Vv6XJ8ZwCyB8',
    'meal': '[dinner]'
    },
    'Kohinoor':	{
    'name': 'Kohinoor',
    'address': '17 7th Ave S, St Cloud, MN 56301',
    'googleMapsLink':'https://goo.gl/maps/ksqd5oMKkfNiW4yN7',
    'meal': '[dinner]'
    },
    'Olde Brick House':	{
    'name': 'Olde Brick House',
    'address': '102 6th Ave S, St Cloud, MN 56301',
    'googleMapsLink': 'https://goo.gl/maps/drBCd7hMgRQU6iWt6',
    'meal': '[dinner, lunch]'
    },
    'Olive Garden':	{
    'name': 'Olive Garden',
    'address': '12 Division St, Waite Park, MN 56387',
    'googleMapsLink': 'https://goo.gl/maps/9Q9Zyk2zqTXeKWsz7',
    'meal': '[lunch]'
    },
    'Krewe': {
    'name': 'Krewe',
    'address': '24 College Ave N, St Joseph, MN 56374',
    'googleMapsLink': 'https://goo.gl/maps/Hay1A3D4VKS9GTXSA',
    'meal': '[dinner]'
    },
    'Bello Cucina': {
    'name': 'Bello Cucina',
    'address': '15 E Minnesota St, St Joseph, MN 56374',
    'googleMapsLink': 'https://goo.gl/maps/RPV8nkkNhJevExjk6',
    'meal': '[dinner, lunch]'
    }

 }
let randNumberForObject = Math.floor(Math.random() * (Object.keys(rappers).length))

//function return random key (Each key-value pair is called a property.)
function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//
function filterRestByMeal(obj, meal){
    let objecForCurrentMeal = Object.values(obj).filter(o => {
        if(Object.values(o)[3].includes(meal)){
            return o
        }
    })
    return objecForCurrentMeal
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

//sent rendom property for lunch
app.get('/random/lunch', (request, response) =>{
    let newRappers= filterRestByMeal(rappers,'lunch')
    response.json(newRappers[getRandomProperty(newRappers)])
})
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//sent rendom property for dinner
app.get('/random/dinner', (request, response) =>{
    let newRappers= filterRestByMeal(rappers,'dinner')
    response.json(newRappers[getRandomProperty(newRappers)])
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