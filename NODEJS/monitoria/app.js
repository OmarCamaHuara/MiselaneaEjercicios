import express from 'express';
const server = express();

server.use(express.json()); // todos os datos seran feiton en formato JSON

//CRUD

// CREATE = INSERT 
// READ = SELECT
// UPDATE =  UPDATE
// DELETE = DELETE

const usuarios = ["Omar", "Oscar", "Ulices", "Alexander"]

server.get("/comentarios", (req, res) => {
    res.json(usuarios)
})

// SELECT * FROM comentarios WHERE id = :index
server.get("/comentarios/:id", (req, res) => {
    const {id} = req.params
   
    res.json(usuarios[id])
})

// INSERT INTO comentarios(name) VALUES ("Mitsuhiko")
server.post("/comentarios", (req, res) =>{
    const {name} = req.body
    usuarios.push(name)
    res.json("Usuario cadastrado")
})

server.listen(3333)
