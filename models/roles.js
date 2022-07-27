const { Schema,model } = require ("mongoose");

const RolesSchema= Schema ({
name:{
    type: String,
    required: true
}

});



module.exports = model(
    'Roles', RolesSchema
)

