const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-capos');
const { validarToken } = require('../middlewares/validar-token');


const router = Router();

//crear un nuevo usuario

router.post('/new',[
    check('name','mane es obligatorio').not().isEmpty(),
    check('email','email es obligatorio').isEmail(),
    check('password','password es obligatorio').isLength({min: 6}),
        validarCampos
],crearUsuario);


//login de usuario
router.post('/',[
    check('email','email es obligatorio').isEmail(),
    check('password','password es obligatorio').isLength({min: 6}),
    validarCampos
],loginUser);


//validar y revalidar token
router.get('/renew', validarToken, renewUser),

// actualizar user




module.exports = router;