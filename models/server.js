const express = require('express')
const cors = require('cors')

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middlewares->funciones que añaden otra funcionalidad al webserver
        this.middlewares();
        //Rutas de mi aplicación

        this.routes();
    }

    //esto es un metódo
    middlewares() {

        //Cors
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())

        //Directorio público
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use('/api/users', require('../routes/user.routes'))

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto ${this.port}`)
        })

    }

}


module.exports = Server;