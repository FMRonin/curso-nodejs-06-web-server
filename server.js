const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs');
app.use( express.static(__dirname + '/public') )

//Partials
hbs.registerPartials(__dirname + '/views/partials', function (err) {})

//Helpers
hbs.registerHelper('anio', (options) => new Date().getFullYear());

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Fabian',
        title: 'Home'
    })
    // let salida = {
    //     nombre:'Fabian',
    //     apellido:'Martinez',
    //     url:req.url
    // }

    //res.send('Hello World')
    //res.send(salida)
})

app.get('/about', function (req, res) {
    res.render('about')
})
 
app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${}`);
})