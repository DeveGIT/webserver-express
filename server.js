/**
 * 
 * LIBRERIA EXPRESS, PARA MANEJAR LAS PETICIONES DE UN SERVIDOR WEB
 */
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; //Si no está el puerto de heroku, carga el nuestro

// Le estamos diciendo al servidor que cualquier petición la redirija a la carpeta public
app.use(express.static(__dirname + '/public'));




// Express HBS engine. Renderiza las vistas con el motor Handlebarjs.js
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando'
    });

});


app.get('/about', (req, res) => {

    res.render('about');

});



app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});