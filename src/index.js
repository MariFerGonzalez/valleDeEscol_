const parser= require("body-parser");
const express = require("express");
const app= express();
const port=5000;
//rutas archivos js
const rutasInicio = require("./routes/iniciar_Sesion");  
const rutaClientes =require("./routes/cliente");// rutas clientes @Alberto  
const rutaProducto = require("./routes/producto"); 
const rutaProvedor=require("./routes/provedores");
const rutaFactura = require("./routes/facturas");
const mongoose= require("mongoose");
require ('dotenv').config();

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
//rutas api
app.use("/api", rutasInicio);
app.use("/api", rutaClientes);// ruta Api Clientes @Alberto
app.use("/api",rutaProducto);
app.use("/api",rutaProvedor);
app.use("/api", rutaFactura);
app.use(express.json());

//conexión base de datos
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("conexion exitosa"))
.catch((error)=>console.log(error));
//conexion a los puertos
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  