const express =require('express');
const router = express.Router();
const clientSchema = require("../models/cliente"); 

//nuevo cliente
router.post("/cliente", (req,res) => {
    const clientes = clientSchema(req.body);
    clientes
     .save()
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}))
 });
 
 module.exports = router;

 //consultar clientes
 router.get("/cliente", ( req, res) => {
     schemaClient.find()
     .then((data) => res.json((data)))
     .catch((error) => res.json({message:error}));
 });

 //consultar cliente por id
 router.get("/cliente/:id", (req, res) =>{
     const { id } = req.params;
     schemaClient
        .findByID(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));

 });

 //modificar por ID cliente
 router.put("/cliente/:id", (req, res) => {
     const { id } = req.params;
     const {nombre_cliente,correo,direccion,telefono,nit} = req.body;
     schemaClient
        .updateOne({ _id: id}, {
            $set: {nombre_cliente,correo, direccion,telefonon,nit}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
 });

 //eliminar cliente por id
 router.delete("/cliente/:id", (req, res) => {
     const { id } = req.params;
     schemaClient
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
 });
