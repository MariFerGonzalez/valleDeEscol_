const express =require('express');
const router = express.Router();
const inicioSchema=require("../models/iniciar_Sesion");   

router.post("/nuevoInicioSesion", (req,res)=>{
   const inicio= inicioSchema(req,body);
   inicio
    .save()
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message: error}))
});

module.exports =router;