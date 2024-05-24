const cors = require ('cors')
const express = require ('express')
const morgan = require ('morgan')
const path = require ('path')

const app = express ()
app.use (cors())

app.set('port', process.env.PORT || 3001);

app.use (morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')))
app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/acerca-de/nosotros')))
app.get ('/acerca-de/nosotros', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/acerca-de/nosotros', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/acerca-de/equipo')))
app.get ('/acerca-de/nuestro-equipo', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/acerca-de/equipo', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/nuestra-tienda')))
app.get ('/nuestra-tienda', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/nuestra-tienda', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/producto')))
app.get ('/producto/:sku', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/producto', 'index'))
})

app.listen (app.get('port'), () => {
    console.log ('Servidor en puerto ', app.get ('port'))
})