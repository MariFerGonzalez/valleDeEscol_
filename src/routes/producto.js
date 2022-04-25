const express = require('express');
const router = express.Router();
const prodcutoSchema= require("../models/producto");

//nuevoProdcuto
router.post("/producto",(req,res)=>{
    const productos = prodcutoSchema(req.body);
    productos
    .save()
    .then((data)=>res.json(data))
    .catch((erro)=>res.json({message : error}));
});

module.exports= router;

//consultar Productos
router.get("/producto",(req,res)=>
{
    prodcutoSchema.find()
 .then((data)=>res.json(data))
 .catch((error)=>res.json({ message:error }));
});

//consultar Producto por id
router.get("/producto/:id", (req, res) =>{
    const { id } = req.params;
    prodcutoSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}));

});
 //modificar por ID al producto
 router.put("/producto/:id", (req, res) => {
    const { id } = req.params;
    const {nombre_prodcuto, stock} = req.body;
    prodcutoSchema
       .updateOne({ _id: id}, {
           $set: {nombre_producto, stock}
       })
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}));
});

//eliminar producto por id
router.delete("/producto/:id", (req, res) => {
    const { id } = req.params;
    prodcutoSchema
       .remove({ _id: id})
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}));
});