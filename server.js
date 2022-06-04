const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000



const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
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

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
    console.log(Object.keys(rappers).length)//return object rappers length
    console.log(randNumberForObject)
})