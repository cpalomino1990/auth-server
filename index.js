
const express = require('express');
const cors = require('cors');
require ('dotenv').config();




const { dbConnection } = require('./db/config');
const marvelService  = require('./service/marvel');
const {createRoles} =require('./libs/inicialSetup')





//crear el servidor/aplicacion express
const app = express();

// dase de datos
dbConnection();

// Directorio Publico
app.use(express.static('public'))

// cors
app.use(cors());

//lectura y parseo de body

app.use(express.json());


//Rutas
app.use('/api/auth', require('./router/auth'));


app.listen(process.env.PORT, ()=> {
    marvelService.buscarPersonajes();
 

});




        
