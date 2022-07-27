const { Schema, model, timestamps } = require("mongoose");

const HeroesSchema =Schema({
    heroe:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true 
    },
    avatar:{
        type: String,
        required: true 
    },
  
},
{
    versionKey:false,
    timestamps:true
}
);

module.exports =  model(
    'Heroes',HeroesSchema )
