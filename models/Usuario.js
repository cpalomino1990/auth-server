const { Schema, model, timestamps } = require("mongoose");
const roles = require("./roles");

const UsuarioSchema =Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true 
    },
    roles:[{
        ref: 'Roles',
        type: Schema.Types.ObjectId
    }]
    // actividad!:{
    //     type: String,
    //     required: true
    // }

    
},
{
    timestamps:true,
    collection: 'actividades',
    versionKey:false,
}
);

module.exports =  model(
    'Usuario',UsuarioSchema )
