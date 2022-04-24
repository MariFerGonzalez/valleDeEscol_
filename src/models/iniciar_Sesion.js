const  mongoose  = require("mongoose");

const inicioSchema=mongoose.Schema({
    nombre_usuario:{
        type: String,
        required: true

    },
    contraseña_usuario:{
        type:String,
        required:true

    }

});
module.exports =mongoose.model('inciar_', inicioSchema);