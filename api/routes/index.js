const express = require('express')
const usuarios = require('./usuariosRoute')
const vagas = require('./vagasRoute')

module.exports = app => {
    app.use(express.json())
    app.use(usuarios)
    app.use(vagas)
}

