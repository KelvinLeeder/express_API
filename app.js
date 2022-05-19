//usando objeto express
const express = require('express')
//App de Express
const app = express ()
app.use(express.json()) //Indicamos que usaremos Json
//puerto en que vamos a ver nuestra app: local host: 3000
const port = 3000
//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port${port}`)
})