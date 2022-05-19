//usando objeto express
const express = require('express')
//App de Express
const app = express ()
app.use(express.json()) //Indicamos que usaremos Json
//puerto en que vamos a ver nuestra app: local host: 3000
const port = 3000

// HTTO METHODS
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explores GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Kelvin1"}
    const explorer2 = {id: 1, name: "Kelvin2"}
    const explorer3 = {id: 1, name: "Kelvin3"}
    const explorer4 = {id: 1, name: "Kelvin4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port${port}`)
})