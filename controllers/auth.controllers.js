const { response, application } = require("express");
const Usuario = require('../models/Usuario');

const bcrypt = require ('bcryptjs');




const crearUsuario = async(req, res = response)=>{
    
  

    const {email, name, password}= req.body
        
    try{
     


        
    

        

    }catch(error){
        console.log(error)
        

        
    }
            
}
    
  // actualizar usuario

const updateUser = async(req, res = response) =>{



    try{

    }catch(error){

        console.log(error);
       

    }

}

    // eliminar Usuario
const deleteUser = async(req, res = response) =>{

    

    try{

      
    }catch(error){

        console.log(error);
        

    }

    


    
};

    
// ingresar Usuario

async function loginUser(req, res = response) {

   

    try {


    } catch (error) {
        console.log(error);
    }

}

const renewUser = async(req, res = response)=>{
   
   
};



//actualizar suario



module.exports ={
    crearUsuario, loginUser, renewUser, updateUser, deleteUser
}


