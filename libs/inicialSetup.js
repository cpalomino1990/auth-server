const {Roles} = require('../models/roles');
const{dbconetion} = require('../db/config')

 const createRoles = async() => {
    

    const count =  await  Roles.estimatedDocumentCount()

    if (count > 0 ) return;


    const values = await Promise.all([
    new Roles({ name: 'user'}).save(),
    new Roles({ name: 'moderator'}).save(),
    new Roles({ name: 'admin'}).save()


    ])
console.log(values)
    
}

module.exports ={

 createRoles

}