//usando objeto express
const express = require('express')
//App de Express
const app = express ()
app.use(express.json()) //Indicamos que usaremos Json
//puerto en que vamos a ver nuestra app: local host: 3000
const port = 3000

// HTTPS METHODS
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explores GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Kelvin1"}
    const explorer2 = {id: 1, name: "Kelvin2"}
    const explorer3 = {id: 1, name: "Kelvin3"}
    const explorer4 = {id: 1, name: "Kelvin4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//Crear un endpoint que regrese un explorer mediante un id
app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`Api Explores GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Kelvin"}
    res.status(200).json(explorer)
})

//Crear un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(201).json({message: "Created"})
})

//Crear un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(200).json({message: "Upadated"})
})

//Crear un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) =>{
    console.log(`Api Explorers DELETE request ${new Date}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(200).json({message: "Deleted"})
})

//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port${port}`)
})

