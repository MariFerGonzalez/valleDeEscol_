const express =require('express');
const router = express.Router();
const facturaSchema = require("../models/factura"); 

router.post("/factura", (req,res) => {
    const facturas = facturaSchema(req.body);
    facturas
     .save()
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}))
 });


 
 module.exports = router;