const parser= require("body-parser");
const express = require("express");
const app= express();
const port=3000;
const rutasInicio =require("./routes/iniciar_Sesion");    
const mongoose= require("mongoose");
require ('dotenv').config();

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.use("/api", rutasInicio);
app.use(express.json());

//conexión base de datos
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("conexion exitosa"))
.catch((error)=>console.log(error));
//conexion a los puertos
app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
});