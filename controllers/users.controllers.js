const { response, request } = require('express')

const usersGet = (req = request, res = response) => {
    
    const {q, nombre} = req.query;

    res.status(400).json({
        msg: 'GET API-controller',
        q,
        nombre
    })
}

const usersPost = (req, res = response) => {

    const {nombre,edad} = req.body;

    res.status(400).json({
        msg: 'POST API-controller',
        nombre,
        edad
    })
}

const usersPut = (req, res = response) => {

    const {id} =  req.params;

    res.status(400).json({
        msg: 'PUT API-controller',
        id
    })
}


const usersDelete = (req, res = response) => {
    res.status(400).json({

        msg: 'DELETE API-controller'
    })
}



module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete

}