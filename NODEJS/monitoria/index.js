//const express = require('express')
import express from 'express';
const server = express();

//query params = localhost:3333/usuarios?name=Omar
server.get("/usuarios", (req, res) => {
    const valueParam = req.query.name
    res.send(`Bem vindo, ${valueParam}`)
})
// route params = localhost:3333/routes/:id
server.get("/routes/:id", (req, res) => {
    const { id }= req.params
    res.send(`O id e: ${id}`)
})


server.listen(3333)
