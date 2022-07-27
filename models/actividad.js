
const { Schema, model, timestamps } = require("mongoose");

const ActividadSchema =Schema({

    actividad:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    }
   
},
{
timestamps:true,
collection: 'actividades',
versionKey:false,
}
);

module.exports =  model(
    'Actividad',ActividadSchema )