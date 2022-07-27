const { response, application } = require("express");
const Usuario = require('../models/Usuario');
const Actividad=require('../models/actividad')
const bcrypt = require ('bcryptjs');
const { generarJWT } = require("../helpers/jwt");
const { Result } = require("express-validator");
const { db, update,  } = require("../models/Usuario");
const { default: mongoose, } = require("mongoose");



const crearUsuario = async(req, res = response)=>{
    
  

    const {email, name, password}= req.body
        
    try{
        // verificar Imail
        const usuario = await Usuario.findOne({email});

        if (usuario){
            return res.status(400).json({
                ok : false,
                msg: 'El Usuario ya esta Creado'
            })
        }

        // crear usuario con modelo

        const dbUser = new Usuario(req.body);

        //Hashar la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

      
      
      
        
        
        

        // respuesta extosa

        return res.status(201).json({
            ok: true,
            uid:dbUser.id,
            name,
            


        })

        

    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Por Favor hable con el administrador'
        });

        
    }
            
}
    
  // actualizar usuario

const updateUser = async(req, res = response) =>{

    const{id }= req.body;
    const{body} = req;


    try{

        const dbUser = await Usuario.findOne({id});
            if (!dbUser){
                return res.status(400).json({
                    msj: ' no existe el usuaio con id' + id
                });
                
            };
        await dbUser.updateOne(body);
        res.json(dbUser)

    }catch(error){

        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'hable con el administrador',
        
        });

    }

}

    // eliminar Usuario
const deleteUser = async(req, res = response) =>{

    const{id }= req.body;


    try{

        const dbUser = await Usuario.findOne({id});
            if (!dbUser){
                return res.status(400).json({
                    msj: ' no existe el usuaio con id'
                });
                
            };
        await dbUser.delete();
        res.json('usuario eliminado')
    }catch(error){

        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'hable con el administrador',
        
        });

    }

    


    
};

    
// ingresar Usuario

async function loginUser(req, res = response) {

    const { email, password,  } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });
        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msj: 'correo no exite'
            });
        }

        //confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msj: 'Password no es valido'
            });
        }

       
       
       

        // Respuesta
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            
        });


    } catch (error) {
        console.log(error);
    }


    return res.json({
        ok: true,
        msg: 'login usuario/new'
    });
}

const renewUser = async(req, res = response)=>{
   
   const { uid, name} = req;
   const token = await generarJWT(uid, name)
    return res.json({
        ok: true,
        uid,
        name,
        token,
        // ultimo_logueo: dbActidivad.createdAt       
    });
};



//actualizar suario



module.exports ={
    crearUsuario, loginUser, renewUser, updateUser, deleteUser
}


