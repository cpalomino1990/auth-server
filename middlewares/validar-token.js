const { response } = require("express");
const  jwt  = require("jsonwebtoken");


const validarToken = (rep,res= response, next) => {
    const token = rep.header('x-token');

    if (!token ){
        return res.status(401).json({
            ok:false,
            msj:'error en el token'
        });
    }

    try{
        const {uid, name}= jwt.verify(token, process.env.SECRET_JWT_SEDD);
        
        rep.uid=uid;
        rep.name=name;



    }catch(error){
        return res.status(401).json({
            ok: false,
            MSJ:'Token no valido'
        });
    }
    next();
}



module.exports = {
    validarToken
}